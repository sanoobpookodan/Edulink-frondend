import { PaginationProps } from "@/types/common.types";

export interface Course {
  id?: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  status: string;
  category?: string;
  categoryId: string;
  instructor?: string;
  duration?: string;
  instructorId: string;
  curriculum?: CurriculumModule[];
  overview?: OverviewPoint[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface OverviewPoint {
  id: string;
  title: string;
}

export interface CourseTableProps extends PaginationProps {
  data: Course[];
}
