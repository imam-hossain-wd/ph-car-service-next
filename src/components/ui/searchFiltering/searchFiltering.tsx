/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/InputForm";
import {
  genderOptions,
  sortOptions,
  orderOptions,
} from "@/components/constatnts/global";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setData,
  setSearchTerm,
  setSortBy,
  setSortOrder,
} from "@/redux/slice/serviceSlice";
import { Button } from "antd";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  searchName?: string;
  sortBy?: string;
  sortOrder?: string;
};

const SearchFiltering = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, sortBy, sortOrder } = useAppSelector(
    (state) => state.service
  );
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
      dispatch(setData(data?.data?.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const name = data?.searchName;
    setSearchTerm(name as string);
    // console.log(data, 'search..');
  };

  const onFilterSubmit: SubmitHandler<Inputs> = (data) => {

    console.log(data, 'filtering..');
    // dispatch(setSortBy(data.sortBy));
    // dispatch(setSortOrder(data.sortOrder));
    // fetchData(searchTerm, data.sortBy as string, data.sortOrder as string);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
  };
  return (
    <div className="flex justify-around rounded items-center -mt-7">
      <Form submitHandler={onFilterSubmit}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="mt-6 mr-3">SortBy : </p>
            <div className=" h-5 w-36 mr-5">
              <FormSelectField
                size="middle"
                name="sortBy"
                options={sortOptions}
                placeholder="Select"
              />
            </div>
          </div>

          <div className=" h-5 flex">
            <p className="mr-5 mt-3">SortOrder : </p>
            <div className="w-28">
              <FormSelectField
                size="middle"
                name="sortOrder"
                options={orderOptions}
                placeholder="Select"
              />
            </div>
          </div>
          <Button className="mt-7 ml-5" type="primary" htmlType="submit">
           Apply Filtering
          </Button>
          <Button onClick={handleClearFilters} className="mt-7 ml-5" type="primary" htmlType="submit">
            Clear Filtering
          </Button>
        </div>
      </Form>

      {/* <form
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

        <Button
          htmlType="submit"
          className="mr-3 bg-gray-700 text-white border-0 px-5 hover:bg-gray-800 text-[15px] font-semibold"
        >
          Apply Filtering
        </Button>
        <Button
          className="bg-gray-700 text-white border-0 px-5 hover:bg-gray-800 font-semibold text-[15px]"
          onClick={handleClearFilters}
        >
          Clear Filtering
        </Button>
      </form> */}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input focus:outline-none rounded border input-sm h-7 mr-2"
          {...register("searchName")}
        />
        <Button
          className="bg-gray-700 text-white border-0 px-5 hover:bg-gray-800 font-semibold text-[15px]"
          htmlType="submit"
        >
          Search
        </Button>
      </form> */}

      <Form submitHandler={onSubmit}>
        <div className="flex items-center mt-6">
          <div>
            <FormInput name="search" type="text" size="middle"  />
          </div>

          <Button className=" mt-2 ml-3" type="primary" htmlType="submit">
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchFiltering;
