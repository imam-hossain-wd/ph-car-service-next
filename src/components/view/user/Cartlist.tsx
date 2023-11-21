"use client";

import UMTable from "@/components/ui/CSTable/CSTable";
import CartModel from "@/components/ui/confirmation-model/Confirmation-Model";
import DeleteModal from "@/components/ui/confirmation-model/DeleteModel";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slice/cartSlice";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AddToCart = () => {

  const [cartListData, setCartListData] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const dispatch:any = useAppDispatch();
  const data = useAppSelector((state) => state.cart.items);
  // console.log(data, 'ppp');

  const showModal = () => {
    setIsCartModalOpen(true);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (imageUrl: string) => (
        <Image
          className="w-20 h-20 rounded-full"
          src={imageUrl}
          alt="Product"
          width={100}
          height={100}
        />
      ),
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      // dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/user/cartlist/details/${data?.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                {/* <EyeOutlined /> */}
                Details
              </Button>
            </Link>
            <Link href={`/user/booking/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data?.id)}
                type="primary"
              >
                {/* <EditOutlined /> */}
                Check out
              </Button>
            </Link>

            <Button
              onClick={() => {
                setCartListData(data);
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
      <div>
        <UMTable
          columns={columns}
          dataSource={data}
          showSizeChanger={true}
          showPagination={true}
        />
      </div>
      <DeleteModal  isCartModalOpen={isCartModalOpen}
        setIsCartModalOpen={setIsCartModalOpen}
        cartListData={cartListData} />
    </div>
  );
};

export default AddToCart;
