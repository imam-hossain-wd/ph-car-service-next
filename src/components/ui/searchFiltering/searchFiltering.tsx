/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/InputForm";
import { sortOptions, orderOptions } from "@/components/constatnts/global";
import Loading from "@/components/view/loading/Loading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setData,
  setSearchTerm,
  setSortBy,
  setSortOrder,
} from "@/redux/slice/serviceSlice";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import Search from "antd/es/input/Search";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  search: string;
  sortBy?: string;
  sortOrder?: string;
};

const SearchFiltering = () => {
  const dispatch: any = useAppDispatch();

  //@ts-ignore

  const { isLoading, searchTerm, sortBy, sortOrder } = useAppSelector(
    (state) => state.service
  );

  const serviceSortBy = sortBy || "name";
  const ServiceSortOrder = sortOrder || "asc";

  const fetchData = async () => {
    try {
      let url;
      url = `https://car-service-auth.vercel.app/api/v1/service/?searchTerm=${searchTerm}&sortBy=${serviceSortBy}&sortOrder=${ServiceSortOrder}`;
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setSearchTerm(data.search));
    fetchData();
  };

  const handleClearFilters = () => {
    dispatch(setSearchTerm(""));
    console.log("clicked..");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, serviceSortBy, ServiceSortOrder]);

  if (isLoading) {
    return <Loading />;
  }
  const handleChange = (value: string) => {
    dispatch(setSortBy(value));
  };
  const handleOrderChange = (value: string) => {
    dispatch(setSortOrder(value));
  };
  return (
    <div className="flex flex-col lg:flex-row rounded items-center bg-gray-200 p-4 w-full lg:w-[75%] mx-auto rounded ">
      <div className="flex items-center">
        <div className="flex items-center">
          <p className=" lg:ml-0 mr-2">SortBy :</p>
            <Select
            className="w-24 mr-2"
              defaultValue="name"
              onChange={handleChange}
              options={sortOptions}
            />
        </div>

        <div className="flex justify-center items-center ">
          <p className="mr-3">SortOrder : </p>
            <Select
            className="w-24"
              defaultValue="asc"
              // style={{ width: 120 }}
              onChange={handleOrderChange}
              options={orderOptions}
            />
        </div>
      </div>
      <div className="flex justify-evenly mt-3 lg:mt-0 items-center ">
      <Form submitHandler={onSubmit}>
        <div className="flex items-center -mt-2">
          <div className="w-36 mr-4 ml-4">
            <FormInput name="search" type="text" size="middle" />
          </div>
          <Button
            className=" mt-2 bg-[#0C1A2D] border-0 h-8 text-white text-[15px] w-28 font-semibold transition ease-in-out delay-150 duration-500 mr-8"
            htmlType="submit"
          >
            <SearchOutlined />
            Search
          </Button>
        </div>
      </Form>
      
      <Button
        onClick={handleClearFilters}
        className=" -ml-4 lg:-ml-5 border-0 h-8 text-[16px] font-bold bg-[#0C1A2D] text-white  w-18 font-semibold transition ease-in-out delay-150  duration-500 mr-8"
        htmlType="submit"
      >
        <ReloadOutlined />
        Clear
      </Button>
      </div>
    </div>
  );
};

export default SearchFiltering;
