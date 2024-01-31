"use client";

import { Button } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EyeOutlined,
  CreditCardFilled,
} from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import UMTable from "@/components/ui/CSTable/CSTable";
import {useBookingQuery} from "@/redux/api/bookingApi";

import Loading from "@/app/loading";
import Image from "next/image";
import DeleteModal from "@/components/ui/deleteModal/DeleteModal";


const BookingTable = () => {
  const [deleteData, setDeleteData] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const showModal = () => {
    setDeleteModalOpen(true);
  };

  const { data, isLoading } = useBookingQuery(undefined);


  if (isLoading) {
    return <Loading />;
  }

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
      responsive: ['lg'], // Hide on sm and md devices
    },
    {
      title: "Email",
      dataIndex: "user",
      render: function (user: any) {
        return user && user.email;
      },
      responsive: ['lg'], // Hide on sm and md devices
    },
    {
      title: "Date",
      dataIndex: "date",
      responsive: ['lg'], // Hide on sm and md devices
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (id: any, record: any) {
        return (
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
          <Link className="mb-2 md:mb-0 lg:mb-0" href={`/user/booking/details/${id}`}>
            <Button  type="primary">
              <EyeOutlined />
            </Button>
          </Link>
          <Link className="mb-2 md:mb-0 lg:mb-0" href={`/user/booking/edit/${id}`}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              type="primary"
            >
              <CreditCardFilled />
            </Button>
          </Link>

          <Button
            onClick={() => {
              setDeleteData(record);
              showModal();
            }}
            type="primary"
            danger
          >
            <DeleteOutlined />
          </Button>
        </div>
        );
      },
    },
  ];

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

      <br />
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        showPagination={true}
      />

      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        deleteData={deleteData}
      />
    </div>
  );
};

export default BookingTable;
