import React, { ReactNode } from "react";
import { ZodSchema } from "zod";

// event types for form handling
export type NativeChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export interface CustomChangeEvent<T = string | File | string[]> {
  target: {
    name: string;
    value: T;
  };
}

export type FormChangeEvent = NativeChangeEvent | CustomChangeEvent;

// Props for the Form component

export type FormTouched<T> = Partial<Record<keyof T, boolean>>;
export type FormErrors<T> = Partial<Record<keyof T, string>>;

export interface FormProps<T> {
  initialData: T;
  schema?: ZodSchema<T>;
  className?: string;
  onSubmit?: (data: T) => void;
  children: (args: {
    form: T;
    field: (name: keyof T) => {
      name: string;
      value: any;
      onChange: (e: FormChangeEvent) => void;
      onBlur: () => void;
      error?: string;
    };
    errors: FormErrors<T>;
    isValid: boolean;
    isDirty: boolean;
    setFieldValue: (field: keyof T, value: string) => void;
  }) => React.ReactNode;
}

export interface Props {
  id: string;
  initialData: any;
}

export interface BaseFormProps<T> {
  mode: "create" | "edit";
  initialData?: T;
}
