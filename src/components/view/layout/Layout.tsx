
"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const accessToken = useAppSelector((state)=> state?.auth?.accessToken);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
      return;
    }
    setIsLoading(false);
  }, [router, accessToken]);

  if (isLoading) {
    return (
      <Space className="flex justify-center items-center">
        <Spin size="large" />
      </Space>
    );
  }


  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
