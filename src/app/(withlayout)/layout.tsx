"use client"
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { IsUserLoggedIn } from "@/services/auth.service";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const loggedUser = IsUserLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loggedUser) {
      router.push("/profile");
    }
    setIsLoading(true);
  }, [router,isLoading]);

  if (!isLoading) {
    return <div className="flex justify-center items-center">
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
