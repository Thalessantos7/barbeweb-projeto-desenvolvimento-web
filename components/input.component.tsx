import { InputHTMLAttributes, ElementType } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icone?: ElementType;
}

export function Input({ icone: Icon, className = "", ...props }: InputProps) {
  return (
    <div className="input-div">
      {Icon && (
        <Icon 
          className="input-div-icon" 
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