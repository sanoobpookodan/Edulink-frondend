export const metadata = {
  title: "Category Details",
};
interface ViewCategoryProps {
  params: { id: string };
}

export default function ViewCategory({ params }: ViewCategoryProps) {
  return <div>View category with ID: {params.id}</div>;
}

