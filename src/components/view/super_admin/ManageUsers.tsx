
"use client";
import { Button, Input } from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import UMTable from "@/components/ui/CSTable/CSTable";
import { useGetUserQuery } from "@/redux/api/userApi";
import Loading from "@/app/loading";
import { useState } from "react";

const ManageUsers = () => {

  const query: Record<string, any> = {}
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const {data, isLoading, isError}= useGetUserQuery(undefined);
const users = data?.data;
const meta = data?.meta;

console.log(users, 'useradmin');

if(isLoading){
  return <Loading />
}
if(isError){
  console.error(isError)
}

const columns = [
  // {
  //   title: "Image",
  //   dataIndex: "userImage",
  //   render: (userImage: string) => (
  //     <Image
  //       className="w-20 h-20 rounded-full"
  //       src={userImage}
  //       alt="Product"
  //       width={100}
  //       height={100}
  //     />
  //   ),
  // },
  {
    title: "Name",
    dataIndex: "firstName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Contact no.",
    dataIndex: "contactNo",
  },
  {
    title: "Designation",
    dataIndex: "designation",
  }, 
  {
    title: "Action",
    dataIndex: "id",
    render: function (data: any) {
      return (
        <>
          <Link href={`/super_admin/admin/details/${data.id}`}>
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
          </Link>
          <Link href={`/super_admin/admin/edit/${data?.id}`}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => console.log(data?.id)}
              type="primary"
            >
              <EditOutlined />
            </Button>
          </Link>
          <Button onClick={() => console.log(data)} type="primary" danger>
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
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={users}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageUsers;