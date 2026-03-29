import Button from "@/components/ui/button/Button";
import { imageExtensions } from "@/constants";
import Image from "next/image";
import React, { FC, useEffect, useState, useRef } from "react";

interface FileInputProps {
  name?: string;
  className?: string;
  accept?: string;
  id?: string;
  placeholder?: string;
  file?: File | string;
  disabled?: boolean;
  success?: boolean;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FC<FileInputProps> = ({
  name,
  className,
  id,
  placeholder,
  file,
  accept = imageExtensions.map((ext) => `.${ext}`).join(","),
  disabled = false,
  success = false,
  error,
  onChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(error);

  useEffect(() => {
    if (!file) return;
    let objectUrl: string | undefined;
    if (typeof file === "string") {
      setPreview(file);
    } else {
      objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
    return () => {
      if (typeof file !== "string") {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [file]);

  const removeImage = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange?.({
      target: {
        name,
        value: null,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };
  let inputClasses = `focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${className}`;

  // Add styles for the different states
  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` text-error-800 border-error-500 focus:ring-3 focus:ring-error-500/10  dark:text-error-400 dark:border-error-500`;
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300  dark:text-success-400 dark:border-success-500`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
  }
  return (
    <div>
      <input
        ref={inputRef}
        id={id}
        type="file"
        name={name}
        accept={accept}
        placeholder={placeholder || "Select an image"}
        className={inputClasses}
        onChange={onChange}
      />
      {preview && (
        <div className="flex flex-row items-end gap-4 my-4">
          <Image src={preview} alt="Preview" width={200} height={200} className="object-contain" />
          <Button onClick={removeImage} variant="outline" size="sm">
            Remove
          </Button>
        </div>
      )}
      {error && <p className={`mt-1.5 text-xs ${"text-error-500"}`}>{error}</p>}
    </div>
  );
};

export default FileInput;
