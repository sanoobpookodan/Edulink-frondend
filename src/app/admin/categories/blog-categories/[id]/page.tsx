export const metadata = {
  title: "Blog Category Details",
};
interface ViewCategoryProps {
  params: Promise<{ id: string }>;
}

export default async function ViewBlogCategory({ params }: ViewCategoryProps) {
  const { id } = await params;
  return <div>View blog category with ID: {id}</div>;
}
