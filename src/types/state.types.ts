import { ActiveStatus, PublishStatus } from ".";

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
  status: ActiveStatus;
}

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

// course interface
export interface Lesson {
  title: string;
  duration: string;
}

export interface CurriculumSection {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  slug: string;
  description: string;
  duration: string;
  image: string | File;
  content: string;
  category: string;
  instructor: string;
}
