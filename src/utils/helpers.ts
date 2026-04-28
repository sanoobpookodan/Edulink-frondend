export const toSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const isRichTextEmpty = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const text = doc.body.textContent?.trim() || "";
  return text.length === 0;
};

export const generateListData = <T extends Record<string, any>>(
  data: T[],
  field: keyof T,
  extraMap: Record<string, keyof T> = {},
) => {
  if (!Array.isArray(data)) return [];

  return data.map((item) => {
    const base = {
      value: item.id,
      label: String(item[field]),
    };

    const extras = Object.entries(extraMap).reduce(
      (acc, [newKey, sourceKey]) => {
        acc[newKey] = item[sourceKey];
        return acc;
      },
      {} as Record<string, any>,
    );

    return { ...base, ...extras };
  });
};

export const toFormData = (data: Record<string, any>) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, String(value));
    }
  });

  return formData;
};
