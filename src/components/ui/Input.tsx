import { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    const baseStyles = 'border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600';
    const errorStyles = error ? 'border-red-600' : 'border-gray-300';
    return (
      <input ref={ref} className={classNames(baseStyles, errorStyles, className)} {...props} />
    );
  }
);
Input.displayName = 'Input';
