interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="w-full bg-[#3D2C1E]/60 hover:bg-[#3D2C1E]/80 focus:bg-[#3D2C1E] text-white placeholder-white/70 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#1A110B] transition-all shadow-sm"
    />
  );
}