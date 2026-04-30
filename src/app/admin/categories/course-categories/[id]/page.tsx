export const metadata = {
  title: "Category Details",
};
interface ViewCategoryProps {
  params: Promise<{ id: string }>;
}

export default async function ViewCategory({ params }: ViewCategoryProps) {
  const { id } = await params;
  return <div>View category with ID: {id}</div>;
}

