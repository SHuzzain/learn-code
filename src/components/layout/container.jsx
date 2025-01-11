import { cn } from "@/lib/utils";

const Container = ({ className, ...props }) => {
  return <div className={cn("container mx-auto px-2", className)} {...props} />;
};

export default Container;
