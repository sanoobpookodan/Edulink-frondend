import { imageTypes } from "@/constants";
import { FormChangeEvent, FormProps } from "@/types";
import { useState } from "react";

function Form<T extends Record<string, any>>({
  children,
  className,
  initialData,
}: FormProps<T>) {
  const [form, setForm] = useState<T>(initialData);

  const handleChange = (e: FormChangeEvent) => {
    // File input case
    const target = e.target;
    if (target instanceof HTMLInputElement && target?.type === "file") {
      const file = target.files?.[0];
      if (!file) return;
      if (!imageTypes.includes(file.type)) {
        alert("Please select a valid image file (jpg, png, jpeg)");
      } else {
        setForm((prev) => ({
          ...prev,
          [target.name]: file,
        }));
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      className={` ${className}`} // Default spacing between form fields
    >
      {children({ form, handleChange })}
    </form>
  );
}

export default Form;
