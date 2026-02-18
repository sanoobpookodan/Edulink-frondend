import type { Spotlight, Blog } from "@/types/state";

const spotlightInitial: Spotlight = {
  title: "",
  description: "",
  image: "",
  status: "active",
};

const blogInitial: Blog = {
  title: "",
  slug: "",
  description: "",
  image: "",
  categories: [],
  tags: [],
  status: "published",
  content: "",
};

export { blogInitial, spotlightInitial };
