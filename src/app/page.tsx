
import { Space,Button } from 'antd'

export default function Home() {
  return (
    <div>
      <h1>hello nextjs </h1>
      <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
    </div>
  )
}
