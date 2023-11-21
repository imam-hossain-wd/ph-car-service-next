import DashboardLayout from "@/components/view/layout/Layout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>
    { children }
  </DashboardLayout>
};

export default layout;