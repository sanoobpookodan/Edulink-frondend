// src/lib/form.ts

/**
 * Converts a string to a URL-friendly slug.
 * Example: "Hello World!" => "hello-world"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric chars
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-"); // Remove multiple dashes
}
