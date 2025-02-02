import ErrorPage from "@/app/error";
import RootLayout from "@/app/root-layout";
import rootRouter from "@/app/route";
import languagesRouters from "./language-route";

/** @type {import("react-router").RouteObject[]} */

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [rootRouter, languagesRouters],
  },
];

export default routesConfig;
