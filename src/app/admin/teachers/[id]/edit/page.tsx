interface EditTeacherProps {
  params: { id: string };
}

export default function EditTeacher({ params }: EditTeacherProps) {
  return <div>Edit teacher with ID: {params.id}</div>;
}
