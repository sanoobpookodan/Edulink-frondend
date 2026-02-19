import { useState } from "react";

export function useFieldArray<T>(initialValue: T[]) {
  const [items, setItems] = useState<T[]>(initialValue);

  const add = (item: T) => {
    setItems((prev) => [...prev, item]);
  };

  const remove = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const update = (index: number, value: Partial<T>) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...value } : item)),
    );
  };

  return {
    items,
    setItems,
    add,
    remove,
    update,
  };
}
