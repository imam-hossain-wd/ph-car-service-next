
"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { IsUserLoggedIn, getUserInfo } from "@/services/auth.service";
import { Layout, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  // const loggedUser = IsUserLoggedIn();


  useEffect(() => {

    const loggedUser = IsUserLoggedIn();
    if (!loggedUser) {
      router.push("/login");
      return;
    }
  
    console.log("User is logged in.");
    setIsLoading(false);
  }, [router]);

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
