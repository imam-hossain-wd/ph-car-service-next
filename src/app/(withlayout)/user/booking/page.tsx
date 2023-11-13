"use client";

import { Button, Input, message } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import ActionBar from "@/components/ui/actionBar/ActionBar";
import UMTable from "@/components/ui/CSTable/CSTable";
import { useBookingQuery, useDeleteBookingMutation } from "@/redux/api/bookingApi";
import { useDispatch } from "react-redux";
import CartModel from "@/components/ui/confirmation-model/Confirmation-Model";
import DeleteModel from "@/components/ui/confirmation-model/DeleteModel";
import Loading from "@/app/loading";

const BookingPage = () => {

  const dispatch = useDispatch()

  const query: Record<string, any> = {};
  
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const {data, isLoading}= useBookingQuery({ ...query });
  const [deleteBooking]= useDeleteBookingMutation();

console.log(data, 'bkdata');
 
if(isLoading){
  return <Loading />
}
  const handleDelete = (bookingId: number) => {
    // deleteBooking(bookingId);
    console.log(data?.bookingName);
    message.success(`${data?.bookingName} Delete Successful`)
  };

  const columns = [

    {
      title: "Booking Name",
      dataIndex: "bookingName",
    },
   {
    title: "Contact No",
    dataIndex: "user",
    render: function (user: any) {
      return user && user.contactNo;
    },
  },
   {
    title: "Contact No",
    dataIndex: "user",
    render: function (user: any) {
      return user && user.email;
    },
  },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "data",
      render: function (data: any) {
        return (
          <>
            <Link href={`/user/booking/details/${data}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/user/booking/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            
            <Button onClick={() =>handleDelete(data) } type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "Profile",
            link: "/profile",
          },
        ]}
      />
    
<br/>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pageSize={size}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default BookingPage;