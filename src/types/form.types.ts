import React, { ReactNode } from "react";

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
export interface FormProps<T extends Record<string, unknown>> {
  children: (props: {
    form: T;
    handleChange: (e: FormChangeEvent) => void;
  }) => ReactNode;
  className?: string;
  initialData: T;
}

export interface Props {
  id: string;
  initialData: any;
}

export interface BaseFormProps<T> {
  mode: "create" | "edit";
  initialData?: T;
}
