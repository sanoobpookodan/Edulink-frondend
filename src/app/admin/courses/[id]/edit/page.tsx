interface EditCourseProps {
  params: { id: string };
}

export default function EditCourse({ params }: EditCourseProps) {
  return <div>Edit course with ID: {params.id}</div>;
}
