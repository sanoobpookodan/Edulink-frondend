import type {
  Testimonial,
  BlogCategory,
  CourseCategory,
  About,
  Spotlight,
  Blog,
  Course,
} from "@/types";

const testimonialInitial: Testimonial = {
  student: "",
  description: "",
};

const blogCategoryInitial: BlogCategory = {
  name: "",
  slug: "",
};

const courseCategoryInitial: CourseCategory = {
  name: "",
  slug: "",
  image: "",
};

const aboutInitial: About = {
  title: "",
  description: "",
  image: "",
  status: "active",
};

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

const courseInitial: Course = {
  title: "",
  slug: "",
  description: "",
  image: "",
  duration: "",
  status: "active",
  content: "",
  category: "",
  instructor: "",
};

export {
  blogInitial,
  spotlightInitial,
  aboutInitial,
  courseCategoryInitial,
  blogCategoryInitial,
  testimonialInitial,
  courseInitial,
};
