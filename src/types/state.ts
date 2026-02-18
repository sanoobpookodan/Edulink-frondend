export interface Testimonial {
  student: string;
  description: string;
}
export interface BlogCategory {
  name: string;
  slug: string;
}
export interface CourseCategory {
  name: string;
  slug: string;
  image?: File | string;
}
export interface About {
  title: string;
  description: string;
  image?: File | string;
  status: "active" | "inactive";
}
import { ActiveStatus, PublishStatus } from "./";

export interface Spotlight {
  title: string;
  description: string;
  image?: File | string;
  status: ActiveStatus;
}

export interface Blog {
  title: string;
  slug: string;
  description: string;
  image?: File | string;
  categories: string[];
  tags: string[];
  status: PublishStatus;
  content: string;
}
