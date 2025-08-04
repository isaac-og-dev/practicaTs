import { useState } from "react";
import { Eye, EyeOff, Lock } from "react-feather";

type PasswordComponentProps = {
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function PasswordComponent({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
}: PasswordComponentProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"
        >
          <Lock size={18} className="text-gray-600" />
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="placeholder-medium-gray border-b-2 border-medium-blue w-full p-2 pr-10 focus:outline-none focus:shadow-md focus:dark-blue"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </span>
      </div>

      {error && <span className="text-start text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
