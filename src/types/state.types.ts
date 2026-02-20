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
  video_url: string;
}

export interface Curriculum {
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

export type UserRole = "student" | "instructor" | "admin";
export type Gender = "male" | "female" | "other";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  isActive: boolean;
}

export interface Student {
  _id: string;
  userId: string;
  phone: string;
  image: string;
  gender: Gender | "";
  dateOfBirth: string;
  createdAt: string;
}

export interface Instructor {
  _id: string;
  userId: string;
  image: string | File;
  bio: string;
  students: number;
  courses: number;
  courseList: string[];
  createdAt: string;
}

type UserForm = Omit<User, "_id" | "passwordHash" | "role" | "isActive"> & {
  password: string;
  confirmPassword: string;
};

type InstructorForm = Omit<
  Instructor,
  "_id" | "userId" | "students" | "courses" | "courseList" | "createdAt"
>;
type StudentForm = Omit<Student, "_id" | "userId" | "createdAt" | "isActive">;

export type CreateInstructorForm = UserForm & InstructorForm;
export type CreateStudentForm = UserForm & StudentForm;

export type UpdateInstructor = Partial<CreateInstructorForm> & {
  _id: string;
};
