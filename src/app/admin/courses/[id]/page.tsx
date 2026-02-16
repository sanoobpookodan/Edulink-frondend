interface ViewCourseProps {
  params: { id: string };
}

export default function ViewCourse({ params }: ViewCourseProps) {
  return <div>View course with ID: {params.id}</div>;
}
