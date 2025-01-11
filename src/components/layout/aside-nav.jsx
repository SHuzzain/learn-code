import { ScrollArea } from "../ui/scroll-area";
import { JAVASCRIPT_INTRO } from "@/features/javascript/constants";
import { Button } from "../ui/button";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { LANGUAGE_TITLE } from "@/constants";

/**
 * @param {{type: keyof LANGUAGE_TITLE}} pops
 */

const AsideNav = ({ type }) => {
  /**
   * @type {Record<keyof LANGUAGE_TITLE, {title: string, href: string}[]>}
   */
  const list = {
    javaScript: JAVASCRIPT_INTRO,
  };

  return (
    <ScrollArea>
      <aside className="md:block top-20 z-30 sticky md:sticky border-grid hidden border-r w-full min-h-screen shrink-0">
        <div className="py-6 lg:py-8 pr-4 h-full">
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
                    <Link to={`${item.href}`}>{item.title}</Link>
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </aside>
    </ScrollArea>
  );
};

export default AsideNav;
