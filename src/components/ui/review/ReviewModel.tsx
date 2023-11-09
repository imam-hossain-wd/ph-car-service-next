// import { CaretRightOutlined } from '@ant-design/icons';
// import type { CSSProperties } from 'react';
// import React from 'react';
// import type { CollapseProps } from 'antd';
// import { Collapse, theme } from 'antd';
// import TextArea from 'antd/es/input/TextArea';


// const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
//   {
//     key: '2',
//     label:<h2>Write Your review</h2>,
//     children: <TextArea
//     showCount
//     maxLength={100}
//     placeholder="Write your comment"
//   />,
//     // style: panelStyle,
//   },

// ];

// const ReviewCollapse = () => {
//   const { token } = theme.useToken();

//   const panelStyle: React.CSSProperties = {
//     marginBottom: 24,
//     background: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: 'none',
//   };

//   return (
//     <Collapse
//       bordered={false}
//       defaultActiveKey={['1']}
//     //   expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
//     //   style={{ background: token.colorBgContainer }}
//     // expandIcon
//       items={getItems(panelStyle)}
//     />
//   );
// };

// export default ReviewCollapse;