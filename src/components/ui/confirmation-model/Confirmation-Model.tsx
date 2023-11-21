"use client";
import React from 'react';
import { Button, message, Popconfirm } from 'antd';
import { useAppDispatch } from '@/redux/hooks';
import { removeFromCart } from '@/redux/slice/cartSlice';


const confirm = (e?: React.MouseEvent<HTMLElement>): void => {
  message.success('Click on Yes');

};

const cancel = (e?: React.MouseEvent<HTMLElement>): void => {
  message.error('Click on No');
};


const CartModel = ({cartListData}:any) => (
  
  <Popconfirm
    // title="Delete the task"
    title={cartListData?.name}
    // description=
    description="Are you sure to delete this service?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    
    <Button  danger>Delete</Button>
  </Popconfirm>
);

export default CartModel;
