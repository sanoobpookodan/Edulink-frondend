import { PaginationProps } from "@/types/common.types";

export interface Instructor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  phone: string;
  image: string;
  gender: string;
  bio: string;
  dateOfBirth: string;
}

export interface InstructorTableProps extends PaginationProps {
  data: Instructor[];
}
