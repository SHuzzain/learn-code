import React from "react";
import { cn } from "@/lib/utils";

/**
 * @template T
 * @typedef {React.ForwardRefExoticComponent<React.HTMLProps<T> & React.RefAttributes<T>>} TypographyProps
 */

/**
 * H1 Component - Large Heading
 * @type {TypographyProps<"h1">}
 */
export const H1 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-extrabold text-4xl lg:text-5xl tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H1.displayName = "H1";

/**
 * H2 Component - Medium Heading
 *
 * @type {TypographyProps<"h2">}
 */
export const H2 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-extrabold text-3xl lg:text-4xl tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H2.displayName = "H2";

/**
 * H3 Component - Smaller Heading
 *
 * @type {TypographyProps<"h3">}
 */
export const H3 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-semibold text-2xl lg:text-3xl tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H3.displayName = "H3";

/**
 * H4 Component - Smaller Heading
 *
 * @type {TypographyProps<"h3">}
 */
export const H4 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-semibold text-xl lg:text-2xl tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H4.displayName = "H4";

/**
 * H5 Component - Smaller Heading
 *
 * @type {TypographyProps<"h3">}
 */
export const H5 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-semibold text-lg lg:text-xl tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H5.displayName = "H5";

/**
 * H6 Component - Smaller Heading
 *
 * @type {TypographyProps<"h3">}
 */
export const H6 = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h6
      ref={ref}
      role="heading"
      className={cn(
        "scroll-m-20 font-semibold text-base lg:text-lg tracking-tight",
        className
      )}
      {...props}
    />
  );
});
H6.displayName = "H6";

/**
 * Paragraph Component
 *
 * @type {TypographyProps<"p">}
 */
export const Paragraph = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      role="note"
      className={cn(
        "text-lg leading-relaxed text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    />
  );
});
Paragraph.displayName = "Paragraph";

/**
 * Text Component - Small Body Text
 *
 * @type {TypographyProps<"span">}
 */
export const Text = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "text-base font-normal text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    />
  );
});
Text.displayName = "Text";

/**
 * SmallText Component - Very Small Text (Used for footnotes, captions, etc.)
 *
 * @type {TypographyProps<"span">}
 */
export const SmallText = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
      {...props}
    />
  );
});
SmallText.displayName = "SmallText";
