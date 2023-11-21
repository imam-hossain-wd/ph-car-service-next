// "use client";

import ManageBookings from "@/components/view/admin/ManageBooking";

// import UMTable from "@/components/ui/CSTable/CSTable";
// import { useBookingQuery } from "@/redux/api/bookingApi";
// import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
// import { Button } from "antd";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const ManageBookings = () => {
//   const query: Record<string, any> = {};

//   const [page, setPage] = useState<number>(1);
//   const [size, setSize] = useState<number>(10);
//   const [sortBy, setSortBy] = useState<string>("");
//   const [sortOrder, setSortOrder] = useState<string>("");
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   query["limit"] = size;
//   query["page"] = page;
//   query["sortBy"] = sortBy;
//   query["sortOrder"] = sortOrder;

//   const { data, isLoading, isError } = useBookingQuery({ query });

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "bookingImage",
//       render: (bookingImage: string) => (
//         <Image
//           className="w-20 h-20 rounded"
//           src={bookingImage}
//           alt="Product"
//           width={100}
//           height={100}
//         />
//       ),
//     },
//     {
//       title: "BookingName",
//       dataIndex: "bookingName",
//     },
//     {
//       title: "Contact No",
//       dataIndex: "user",
//       render: function (user: any) {
//         return user && user.contactNo;
//       },
//     },
//     {
//       title: "Email",
//       dataIndex: "user",
//       render: function (user: any) {
//         return user && user.email;
//       },
//     },
//     {
//       title: "Action",
//       dataIndex: "id",
//       render: function (data: any) {
//         return (
//           <>
//             <Link href={`/super_admin/admin/details/${data.id}`}>
//               <Button onClick={() => console.log(data)} type="primary">
//                 <EyeOutlined />
//               </Button>
//             </Link>
//             <Link href={`/super_admin/admin/edit/${data?.id}`}>
//               <Button
//                 style={{
//                   margin: "0px 5px",
//                 }}
//                 onClick={() => console.log(data?.id)}
//                 type="primary"
//               >
//                 <EditOutlined />
//               </Button>
//             </Link>
//             <Button onClick={() => console.log(data)} type="primary" danger>
//               <DeleteOutlined />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const onPaginationChange = (page: number, pageSize: number) => {
//     console.log("Page:", page, "PageSize:", pageSize);
//     setPage(page);
//     setSize(pageSize);
//   };
//   const onTableChange = (pagination: any, filter: any, sorter: any) => {
//     const { order, field } = sorter;
//     setSortBy(field as string);
//     setSortOrder(order === "ascend" ? "asc" : "desc");
//   };

//   const resetFilters = () => {
//     setSortBy("");
//     setSortOrder("");
//     setSearchTerm("");
//   };

//   return (
//     <div>
//       <UMTable
//         loading={isLoading}
//         columns={columns}
//         dataSource={data}
//         pageSize={size}
//         showSizeChanger={true}
//         onPaginationChange={onPaginationChange}
//         onTableChange={onTableChange}
//         showPagination={true}
//       />
//     </div>
//   );
// };

// export default ManageBookings;


const AdminManageBooking = () => {
  return <ManageBookings />
};

export default AdminManageBooking;
