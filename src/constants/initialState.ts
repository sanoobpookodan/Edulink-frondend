import type { Testimonial } from "@/types/state";
const testimonialInitial: Testimonial = {
  student: "",
  description: "",
};
import type { BlogCategory } from "@/types/state";
const blogCategoryInitial: BlogCategory = {
  name: "",
  slug: "",
};
import type { CourseCategory } from "@/types/state";
const courseCategoryInitial: CourseCategory = {
  name: "",
  slug: "",
  image: "",
};
import type { About } from "@/types/state";
const aboutInitial: About = {
  title: "",
  description: "",
  image: "",
  status: "active",
};
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

export {
  blogInitial,
  spotlightInitial,
  aboutInitial,
  courseCategoryInitial,
  blogCategoryInitial,
  testimonialInitial,
};
