import { ScrollArea } from "../ui/scroll-area";
import { JAVASCRIPT_INTRO } from "@/features/javascript/constants";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { REACT_INTRO } from "@/features/reactJS/constants";

const AsideNav = ({ type }) => {
  /**
   * @type {Record<keyof LANGUAGE_TITLE, {title: string, href: string}[]>}
   */
  const list = {
    javascript: JAVASCRIPT_INTRO,
    "react-js": REACT_INTRO,
  };

  return (
    <aside className="md:block top-20 z-30 sticky md:sticky border-grid hidden border-r w-full shrink-0">
      <ScrollArea>
        <div className="py-6 lg:py-8 pr-4 h-[calc(100vh-5rem)]">
          <h4 className="py-1 rounded-md font-semibold text-lg">
            On this Page
          </h4>
          <div className="flex flex-col gap-6">
            <div className="gap-0.5 grid grid-flow-row auto-rows-max text-sm">
              {Array.isArray(list[type]) &&
                list[type].map((item) => (
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start pl-0"
                    key={item.title}
                  >
                    <Link to={`${item.href}`} className="truncate">
                      {item.title}
                    </Link>
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default AsideNav;
