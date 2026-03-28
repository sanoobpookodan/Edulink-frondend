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
  curriculum: any[];
  overview: any[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseTableProps {
  data: Course[];
  meta?: PaginationMeta;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
}
