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
import UMTable from "@/components/ui/CSTable/CSTable";
import {
  useBookingQuery,
  useDeleteBookingMutation,
} from "@/redux/api/bookingApi";
import { useDispatch } from "react-redux";
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
          </>
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
