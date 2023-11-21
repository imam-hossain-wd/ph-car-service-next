/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormInput from "@/components/Forms/InputForm";
import {
  sortOptions,
  orderOptions,
} from "@/components/constatnts/global";
import Loading from "@/components/view/loading/Loading";
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
  search: string;
  sortBy?: string;
  sortOrder?: string;
};

const SearchFiltering = () => {
  const dispatch:any = useAppDispatch();

//@ts-ignore

  const {isLoading,searchTerm, sortBy, sortOrder } = useAppSelector((state) => state.service);
  
  const serviceSortBy = sortBy || "name";
  const ServiceSortOrder = sortOrder || "asc";

  const fetchData = async () => {
    try {
      let url;
       url =  `https://car-service-auth.vercel.app/api/v1/service/?searchTerm=${searchTerm}&sortBy=${serviceSortBy}&sortOrder=${ServiceSortOrder}`;
      const res = await fetch(url, {
        cache: 'force-cache',
        next: {
          revalidate: 5,
        },
      });
      const data = await res.json();
      dispatch(setData(data?.data?.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setSearchTerm(data.search));
    fetchData();
  };

  const onFilterSubmit: SubmitHandler<Inputs> = (data) => {
    
    dispatch(setSortBy(data.sortBy as string));
    dispatch(setSortOrder(data.sortOrder as string));
    fetchData();
  };

  const handleClearFilters = () => {
    dispatch(setSearchTerm(''));
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [ searchTerm, serviceSortBy, ServiceSortOrder]);

  if(isLoading){
    return <Loading />
  }
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
