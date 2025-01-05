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

const NavHeader = () => {
  const components = [
    {
      title: "JavaScript",
      href: "javascript",
      description:
        "JavaScript is the most popular programming language used in the field of website development.",
    },
    {
      title: "Node Js",
      href: "Node-js",
      description:
        "Node.js is a powerful, open-source, and cross-platform JavaScript runtime environment built on",
    },
    {
      title: "React Js",
      href: "react-js",
      description:
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
      title: "PostgreSQL",
      href: "postgre-sql",
      description:
        "The official site for PostgreSQL, the world's most advanced open source database.",
    },
    {
      title: "Rest API",
      href: "rest-api",
      description:
        "REST API is a way of accessing web services in a simple and flexible way without having any processing.",
    },
    {
      title: "Deployment",
      href: "deployment",
      description:
        "Go to your app page on Heroku and choose “Resources”. Under add-ons, search for Heroku Postgres and add the mini plan to your app.",
    },
  ];

  return (
    <header className="top-0 fixed flex justify-around items-center border-gray-200 shadow px-2 py-5 border-b w-full h-20">
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
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
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
