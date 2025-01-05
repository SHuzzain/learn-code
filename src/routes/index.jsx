import ErrorPage from "@/app/error";
import javaScriptRouter from "@/app/javascript/route";
import RootLayout from "@/app/root-layout";
import rootRouter from "@/app/route";

/** @type {import("react-router").RouteObject} */

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [rootRouter, javaScriptRouter],
  },
];

export default routesConfig;
