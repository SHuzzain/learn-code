import NavHeader from "@/components/layout/nav-header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <NavHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
