import { InputHTMLAttributes, ElementType } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icone?: ElementType;
}

export function Input({ icone: Icon, className = "", ...props }: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {Icon && (
        <Icon 
          className="absolute left-4 text-white/70 pointer-events-none" 
          size={20} 
        />
      )}
      
      <input
        className={`input-campo w-full ${Icon ? 'pl-12' : 'pl-4'} ${className}`}
        {...props}
      />
    </div>
  );
}