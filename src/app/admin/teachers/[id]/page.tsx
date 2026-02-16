interface ViewTeacherProps {
  params: { id: string };
}

export default function ViewTeacher({ params }: ViewTeacherProps) {
  return <div>View teacher with ID: {params.id}</div>;
}
