import clsx from "clsx";
import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration?: Partial<UseFormRegisterReturn>
} 

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref){
  const {type='text', className='', ...rest} = props;
  
  return (
    <input
      ref={ref}
      type={type}
      className={clsx(
        'relative py-2 px-3 inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30',
        className
      )}
      {...rest}
    >
    {props.children}
    </input>
  )
})