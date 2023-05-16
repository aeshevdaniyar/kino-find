import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};
const Input: FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-grey-300 text-sm text-left mb-2">
          {label}
        </label>
      )}

      <input
        type="text"
        className={cn(
          className,
          "block w-full py-2.5 px-3.5 bg-white rounded-lg",
          error && "border-2 border-primary-900"
        )}
        {...props}
      />
      {error && <p className="text-sm text-primary-900 mt-1.5">{error}</p>}
    </div>
  );
};

export default Input;
