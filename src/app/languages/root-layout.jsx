import { Outlet, useLocation } from "react-router";
import "highlight.js/styles/github.css";
import AsideNav from "@/components/layout/aside-nav";
import { useMemo } from "react";

const LanguageLayout = () => {
  const location = useLocation();

  const currentLang = useMemo(() => {
    return location.pathname.split("/").at(-1);
  }, [location.pathname]);

  return (
    <div className="grid grid-cols-7">
      <section className="span-1">
        <AsideNav type={currentLang} />
      </section>
      <section className="col-span-6 p-5">
        <Outlet />
      </section>
    </div>
  );
};

export default LanguageLayout;
