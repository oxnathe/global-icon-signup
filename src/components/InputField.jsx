import { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

const InputField = forwardRef(function InputField(
  {
    label,
    name,
    type = "text",
    placeholder,
    error,
    required = false,
    ...props
  },
  ref
) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-neutral-800"
      >
        {label}

        {required && (
          <span className="ml-1 text-orange-500">*</span>
        )}
      </label>

      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={`form-input ${
          error
            ? "border-red-400 focus:border-red-500"
            : ""
        }`}
        {...props}
      />

      {error && (
        <div className="flex items-center gap-1.5 text-xs font-medium text-red-500">
          <AlertCircle size={14} />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
});

export default InputField;