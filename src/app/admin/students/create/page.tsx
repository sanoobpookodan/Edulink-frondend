import StudentCreateView from "@/modules/admin/students/StudentCreateView";

export const metadata = {
  title: "Create Student",
};

export default function CreateStudent() {
  return <StudentCreateView />;
}
