import { ReactNode, forwardRef } from "react";
import { ScrollArea } from "./ScrollArea";
import classNames from "classnames";

interface AlertProps {
  variant?: "default" | "destructive" | "success";
  children: ReactNode;
  className?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "default", children, className, ...props }, ref) => {
    const baseStyles = "p-4 rounded-lg flex items-center";
    const variants = {
      default: "bg-blue-100 text-blue-800",
      destructive: "bg-red-100 text-red-800",
      success: "bg-green-100 text-green-800",
    };

    return (
      <div
        ref={ref}
        className={classNames(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const AlertDescription = ({
  children,
  className,
}: AlertDescriptionProps) => (
  <p className={classNames("ml-2", className)}>{children}</p>
);

Alert.displayName = "Alert";

export { Alert, ScrollArea };
