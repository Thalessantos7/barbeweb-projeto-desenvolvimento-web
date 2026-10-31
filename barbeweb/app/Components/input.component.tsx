import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {icon && <span className="absolute left-4 text-[#3D2C1E]/70">{icon}</span>}
      <input 
        className={`input-campo w-full ${icon ? 'pl-12' : 'pl-4'}`} 
        {...props} 
      />
    </div>
  );
}