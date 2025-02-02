import javaScriptRouter from "@/app/languages/javascript/route";
import ReactJsRouter from "@/app/languages/react-js/route";
import LanguageLayout from "@/app/languages/root-layout";
import languageRouter from "@/app/languages/route";

/** @type {import("react-router").RouteObject} */
const languagesRouters = {
  path: "languages",
  element: <LanguageLayout />,
  children: [languageRouter, javaScriptRouter, ReactJsRouter],
};

export default languagesRouters;
