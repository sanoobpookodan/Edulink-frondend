import { PaginationMeta } from "@/types/common.types";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  duration: string;
  image: string;
  status: string;
  category: string;
  instructor: string;
  curriculum: CurriculumModule[];
  overview: OverviewPoint[];
  createdAt: string;
  updatedAt: string;
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

export interface CourseTableProps {
  data: Course[];
  meta?: PaginationMeta;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
}
