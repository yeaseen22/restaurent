import { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium focus:outline-none rounded-lg';
    const variants = {
      primary: 'bg-gray-600 text-white hover:bg-bray-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-100',
      outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
      ghost: 'text-gray-800 hover:bg-gray-100'
    };
    const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2 text-md',
      lg: 'px-6 py-3 text-lg',
      icon: 'p-2'
    };
    return (
      <button ref={ref} className={classNames(baseStyles, variants[variant], sizes[size], className)} {...props} />
    );
  }
);
Button.displayName = 'Button';
