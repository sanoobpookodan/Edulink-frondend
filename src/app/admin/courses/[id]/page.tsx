import CourseView from "@/modules/admin/courses/components/CourseView";

export const metadata = {
  title: "Course Details",
};

interface ViewCourseProps {
  params: Promise<{ id: string }>;
}

export default async function ViewCoursePage({ params }: ViewCourseProps) {
  const { id } = await params;

  return <CourseView id={id} />;
}
