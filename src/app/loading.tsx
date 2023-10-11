import { Space, Spin } from 'antd';

const Loading: React.FC = () => (
  <Space size="middle">
    <div className='flex justify-center items-center'>
    <Spin size="large" />
    </div>
  </Space>
);

export default Loading;