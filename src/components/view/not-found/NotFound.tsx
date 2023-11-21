
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, This page is not found"
    extra={<Button type="primary"><Link href="/">Back Home</Link></Button>}
  />
);

export default NotFound;