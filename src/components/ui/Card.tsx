import { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';

// Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    const baseStyles = 'shadow-lg rounded-lg border bg-white';
    return (
      <div ref={ref} className={classNames(baseStyles, className)} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

// Card Sub-Components
export const CardContent = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={classNames('p-4', className)}>{children}</div>
);

export const CardHeader = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={classNames('p-4 border-b', className)}>{children}</div>
);

export const CardTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const CardFooter = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={classNames('p-4 border-t', className)}>{children}</div>
);
