import { useState, useMemo, useCallback } from "react";
import { imageTypes } from "@/constants";
import { FormChangeEvent, FormErrors, FormProps, FormTouched } from "@/types";

function Form<T extends Record<string, any>>({
  initialData,
  schema,
  className,
  onSubmit,
  children,
}: FormProps<T>) {
  const [form, setForm] = useState<T>(initialData);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<FormTouched<T>>({});

  // ── Validate full form ─────────────────────────────
  const validateForm = () => {
    if (!schema) return true;

    const result = schema.safeParse(form);

    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors = Object.fromEntries(
      Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [k, (v as string[])[0]]),
    ) as FormErrors<T>;

    setErrors(fieldErrors);
    return false;
  };

  // ── Validate single field ──────────────────────────
  const validateField = (name: keyof T, value: any) => {
    if (!schema) return;

    const result = schema.safeParse({ ...form, [name]: value });

    const message = result.success ? undefined : result.error.flatten().fieldErrors[name]?.[0];

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const setFieldValue = useCallback(
    (field: keyof T, value: string) => {
      setForm((prev) => {
        if (touched[field]) validateField(field, value);
        return { ...prev, [field]: value };
      });
    },
    [touched, validateField],
  );

  // ── Change handler ─────────────────────────────────
  const handleChange = (e: FormChangeEvent) => {
    const target = e.target;
    const name = target.name as keyof T;

    let value: any = target.value;

    if (target instanceof HTMLInputElement && target.type === "file") {
      const file = target.files?.[0];
      if (!file) return;

      if (!imageTypes.includes(file.type)) {
        alert("Invalid image file");
        return;
      }

      value = file;
    }

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (touched[name]) {
        validateField(name, value);
      }

      return updated;
    });
  };

  // ── Blur handler ───────────────────────────────────
  const handleBlur = (name: keyof T) => () => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, form[name]);
  };

  // ── Submit ─────────────────────────────────────────
  const handleSubmit = () => {
    // mark all touched
    const allTouched = Object.keys(form).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as FormTouched<T>);

    setTouched(allTouched);

    const isValid = validateForm();
    if (!isValid) return;

    onSubmit?.(form);
  };

  // ── Helpers ────────────────────────────────────────
  const field = (name: Extract<keyof T, string>) => ({
    name: name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur(name),
    error: touched[name] ? errors[name] : undefined,
  });

  const isValid = useMemo(() => (schema ? schema.safeParse(form).success : true), [form, schema]);

  const isDirty = useMemo(
    () => Object.keys(initialData).some((key) => form[key] !== initialData[key]),
    [form, initialData],
  );

  // ── Render ─────────────────────────────────────────
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const target = e.target as HTMLElement;
          // allow multiline inputs
          if (target.tagName === "TEXTAREA" || target.getAttribute("contenteditable") === "true") {
            return;
          }
          e.preventDefault();
          handleSubmit();
        }
      }}
      className={`space-y-4 ${className}`}
    >
      {children({
        form,
        field,
        errors,
        isValid,
        isDirty,
        setFieldValue,
      })}
    </form>
  );
}

export default Form;
