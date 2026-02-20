export const metadata = {
  title: "Student Details",
};
interface ViewStudentProps {
  params: { id: string };
}

export default function ViewStudent({ params }: ViewStudentProps) {
  return <div>View teacher with ID: {params.id}</div>;
}
