export const metadata = {
  title: "Teacher Details",
};
interface ViewTeacherProps {
  params: Promise<{ id: string }>;
}

export default async function ViewTeacher({ params }: ViewTeacherProps) {
  const { id } = await params;
  return <div>View teacher with ID: {id}</div>;
}
