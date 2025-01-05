import { cn } from "@/lib/utils";

const Container = ({ classname, ...props }) => {
  return <div className={cn("container mx-auto px-2", classname)} {...props} />;
};

export default Container;
