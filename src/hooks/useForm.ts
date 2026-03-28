import { useCallback, useMemo, useState } from "react";
import type { ZodSchema } from "zod";

type FormErrors<T> = Partial<Record<keyof T, string>>;
type FormTouched<T> = Partial<Record<keyof T, boolean>>;

interface UseFormOptions<T> {
  schema: ZodSchema<T>;
  initialValues: T;
}

interface UseFormReturn<T> {
  form: T;
  errors: FormErrors<T>;
  touched: FormTouched<T>;
  isFormValid: boolean;
  isDirty: boolean;
  setForm: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: (field: keyof T, value: any) => void;
  handleBlur: (field: keyof T) => () => void;
  handleSubmit: (onValid: (data: T) => void) => void;
  reset: () => void;
  touchAll: () => void;
}

export function useForm<T extends Record<string, any>>({
  schema,
  initialValues,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [form, setForm] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<FormTouched<T>>({});

  // ── Private helpers ───────────────────────────────────────────────────────

  const parseErrors = (
    result: ReturnType<ZodSchema<T>["safeParse"]>,
  ): FormErrors<T> => {
    if (result.success) return {};
    return Object.fromEntries(
      Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [
        k,
        (v as string[])[0],
      ]),
    ) as FormErrors<T>;
  };

  const buildAllTouched = useCallback(
    (): FormTouched<T> =>
      Object.keys(initialValues).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as FormTouched<T>,
      ),
    [initialValues],
  );

  // ── Validate a single field against the latest form snapshot ─────────────

  const validateField = useCallback(
    (field: keyof T, value: any, latestForm: T) => {
      const result = schema.safeParse({ ...latestForm, [field]: value });
      const message = result.success
        ? undefined
        : result.error.flatten().fieldErrors[field]?.[0];
      setErrors((prev) => ({ ...prev, [field]: message }));
    },
    [schema],
  );

  // ── Public API ────────────────────────────────────────────────────────────

  const setFieldValue = useCallback(
    (field: keyof T, value: any) => {
      setForm((prev) => {
        const next = { ...prev, [field]: value };
        if (touched[field]) validateField(field, value, next);
        return next;
      });
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (field: keyof T) => () => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      validateField(field, form[field], form);
    },
    [form, validateField],
  );

  const handleSubmit = useCallback(
    (onValid: (data: T) => void) => {
      setTouched(buildAllTouched());
      const result = schema.safeParse(form);
      if (!result.success) {
        setErrors(parseErrors(result));
        return;
      }
      setErrors({});
      onValid(result.data);
    },
    [schema, form, buildAllTouched],
  );

  const reset = useCallback(() => {
    setForm(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const touchAll = useCallback(
    () => setTouched(buildAllTouched()),
    [buildAllTouched],
  );

  const isFormValid = useMemo(
    () => schema.safeParse(form).success,
    [schema, form],
  );

  const isDirty = useMemo(
    () => Object.keys(initialValues).some((k) => form[k] !== initialValues[k]),
    [form, initialValues],
  );

  return {
    form,
    setForm,
    errors,
    touched,
    isFormValid,
    isDirty,
    setFieldValue,
    handleBlur,
    handleSubmit,
    reset,
    touchAll,
  };
}
