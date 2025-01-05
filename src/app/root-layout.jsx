import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      hello
      <Outlet />
    </div>
  );
};

export default RootLayout;
