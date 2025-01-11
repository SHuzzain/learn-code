import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { H3, H6, SmallText } from "../ui/typography";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import { NAV_COMPONENTS, NAV_HREF } from "@/constants";

const NavHeader = () => {
  return (
    <header className="top-0 z-50 sticky flex justify-around items-center border-gray-200 bg-background shadow px-2 py-5 border-b w-full h-20">
      <H3 className="flex gap-1">
        Brain <SmallText className="text-lg text-sky-500">cell</SmallText>
      </H3>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <H6>Learn</H6>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="gap-3 grid md:grid-cols-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                {NAV_COMPONENTS.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={NAV_HREF[component.title]}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavHeader;

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <NavLink
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="font-medium text-sm leading-none">{title}</div>
            <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
              {children}
            </p>
          </NavLink>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
