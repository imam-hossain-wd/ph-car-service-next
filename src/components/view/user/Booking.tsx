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
import Loading from "@/app/loading";
import Image from "next/image";

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

 
if(isLoading){
  return <Loading />
}
  const handleDelete = (bookingData: number) => {
    //@ts-ignore
    const { id, bookingName } = bookingData;
    deleteBooking(id);
    message.success(`${bookingName} Delete Successful`)
  };

  const columns = [

    {
      title: "Booking Image",
      dataIndex: "bookingImage",
      render: (bookingImage: string) => (
        <Image
          className="w-20 h-20 rounded"
          src={bookingImage}
          alt="Product"
          width={100}
          height={100}
        />
      ),
    },
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
    title: "Email",
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
      dataIndex: "id",
      render: function (id: any, record: any) {
        return (
          <>
            <Link href={`/user/booking/details/${id}`}>
              <Button type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/user/booking/edit/${id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            
            <Button onClick={() =>handleDelete(record) } type="primary" danger>
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