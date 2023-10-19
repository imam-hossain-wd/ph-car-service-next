/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setData, setSearchTerm, setSortBy, setSortOrder } from "@/redux/slice/serviceSlice";
import { Button, Select, message } from "antd";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  searchName?: string;
  sortBy?: string;
  sortOrder?: string;
};

const SearchFiltering = () => {

  const dispatch = useAppDispatch();
  const { searchTerm, sortBy, sortOrder } = useAppSelector((state) => state.service);
  const serviceData = useAppSelector((state) => state.service.data);


  useEffect(() => {
    fetchData(searchTerm, sortBy, sortOrder);
  }, [searchTerm, sortBy, sortOrder]);

  const fetchData = async (
    searchTerm: string,
    sortBy: string,
    sortOrder: string
  ) => {
    try {
      const url = `http://localhost:5000/api/v1/service/?size=${6}&searchTerm=${searchTerm}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
      const res = await fetch(url, {
        cache: "force-cache",
        next: {
          revalidate: 5,
        },
      });
      const data = await res.json();
      dispatch(setData(data?.data?.data))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const {
    register,
    handleSubmit
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const name = data?.searchName;
    setSearchTerm(name as string);
  };

  const onFilterSubmit: SubmitHandler<Inputs> = (data) => {

    dispatch(setSortBy(data.sortBy));
    dispatch(setSortOrder(data.sortOrder));
    fetchData(searchTerm, data.sortBy as string, data.sortOrder as string);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
  };
  return (
    <div className="flex justify-around items-center mb-5">
      <form
        onSubmit={handleSubmit(onFilterSubmit)}
        className="flex justify-around items-center"
      >
        <div className="flex items-center mr-1">
          <p>SortBy: </p>
          <select
            className="w-28 ml-2 mr-2 p-1 border border-gray-300 rounded-md text-lg focus:outline-none "
            {...register("sortBy")}
          >
            <option value="name" className="p-2">
             Name
            </option>
            <option value="price" className="p-2">
            Price
            </option>
          </select>
        </div>
        <div className="flex items-center mr-1">
          <p>SortOrder: </p>
          <select
            className="w-28 ml-2 mr-2 p-1 border border-gray-300 rounded-md text-lg focus:outline-none "
            {...register("sortOrder")}
          >
            <option value="asc" className="p-2">
              ASC
            </option>
            <option value="desc" className="p-2">
              DESC
            </option>
          </select>
        </div>

        <Button htmlType="submit" type="primary" className="mr-3">
          Apply Filtering
        </Button>
        <Button onClick={handleClearFilters} type="primary">
          Clear Filtering
        </Button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input focus:outline-none rounded border input-sm h-7 mr-2"
          {...register("searchName")}
        />
        <Button htmlType="submit" type="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchFiltering;
