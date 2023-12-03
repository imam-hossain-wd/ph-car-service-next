"use client";

import { Button} from "antd";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";


import Image from "next/image";
import { useAdminsQuery } from "@/redux/api/adminApi";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import ActionBar from "@/components/ui/actionBar/ActionBar";
import UMTable from "@/components/ui/CSTable/CSTable";

const AdminPage = () => {

  const { data, isLoading } = useAdminsQuery(undefined);
  const admins = data?.admins;
  const meta = data?.meta;

  const columns = [
    {
      title: "Image",
      dataIndex: "userImage",
      render: (userImage: string) => (
        <Image
          className="w-20 h-20 rounded-full"
          src={userImage}
          alt="Product"
          width={100}
          height={100}
        />
      ),
    },
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

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="Admin List">
        <div>
          <Link href="/super_admin/admin/create">
            <Button type="primary">Create Admin</Button>
          </Link>
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        totalPages={meta?.total}
        showSizeChanger={true}
        showPagination={true}
      />
    </div>
  );
};

export default AdminPage;
