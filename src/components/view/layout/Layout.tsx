
"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { IsUserLoggedIn } from "@/services/auth.service";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const loggedUser = IsUserLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loggedUser = IsUserLoggedIn();
    if (!loggedUser) {
      router.push("/login");
    }
    setIsLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // [router, isLoading]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading) {
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
