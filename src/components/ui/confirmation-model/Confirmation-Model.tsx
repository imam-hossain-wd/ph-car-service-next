import React from 'react';
import { Button, message, Popconfirm } from 'antd';

const confirm = (e?: React.MouseEvent<HTMLElement>): void => {
  message.success('Click on Yes');
};

const cancel = (e?: React.MouseEvent<HTMLElement>): void => {
  message.error('Click on No');
};

const CartModel = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default CartModel;
