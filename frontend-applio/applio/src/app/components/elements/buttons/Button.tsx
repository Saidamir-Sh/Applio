import clsx from 'clsx';
import * as React from 'react';

const variants = {
  primary: "bg-purple-600 text-white",
  danger: "bg-red-600 text-white",
  success: "bg-green-600 text-white"
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8, text-lg'
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants; 
  size?: keyof typeof sizes;
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref){
  const { type = 'button', className = '', variant = 'primary', size = 'md', isLoading = false } = props;
  return (
    <button
    ref={ref}
    type={type}
    className={clsx(
        'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-one hover:opacity-80',
    variants[variant],
    sizes[size],
    className
      )}
    {...props}
    >
      {props.children}
    </button>
  )
})

Button.displayName = 'Button';