interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-black hover:bg-[#1A110B] text-white text-sm font-semibold py-5 rounded-full transition duration-200 shadow-md"
    >
      {children}
    </button>
  );
}