import type {
  Testimonial,
  BlogCategory,
  CourseCategory,
  About,
  Spotlight,
  Blog,
  Course,
  Curriculum,
  Lesson,
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
  content: "",
  category: "",
  instructor: "",
};

// const curriculumInitial: Curriculum[] = [
//   {
//     title: "chapter 1",
//     lessons: [{ title: "Lesson 1-ch1", duration: "", video_url: "" }],
//   },
//   {
//     title: "chapter 2",
//     lessons: [{ title: "Lesson 1-ch2", duration: "", video_url: "" }],
//   },
//   {
//     title: "chapter 3",
//     lessons: [{ title: "Lesson 1-ch3", duration: "", video_url: "" }],
//   },
// ];
const curriculumInitial: Curriculum[] = [
  {
    title: "",
    lessons: [{ title: "", duration: "", video_url: "" }],
  },
];

const overviewInitial: string[] = [""];

export {
  blogInitial,
  spotlightInitial,
  aboutInitial,
  courseCategoryInitial,
  blogCategoryInitial,
  testimonialInitial,
  courseInitial,
  curriculumInitial,
  overviewInitial,
};
