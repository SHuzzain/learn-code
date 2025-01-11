import NavHeader from "@/components/layout/nav-header";
import { Outlet } from "react-router";
import "highlight.js/styles/github.css";

const RootLayout = () => {
  return (
    <div>
      <NavHeader />
      <div className="px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
