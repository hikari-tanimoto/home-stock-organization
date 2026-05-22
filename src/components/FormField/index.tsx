import { PropsWithChildren } from "react";
type FormFieldProps = {
  label: string;
  htmlFor: string;
  errorMessage?: string; // ← Zod v4 では undefined 許容に注意
};

export default function FormField({
  label,
  htmlFor,
  errorMessage,
  children,
}: PropsWithChildren<FormFieldProps>) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {children}
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
