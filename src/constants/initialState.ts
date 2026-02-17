import { Blog } from "@/types/state";

const blogInitial: Blog = {
  title: "",
  slug: "",
  description: "",
  image: "",
  categories: "",
  tags: [],
  status: "published",
  content: "",
};

export { blogInitial };
