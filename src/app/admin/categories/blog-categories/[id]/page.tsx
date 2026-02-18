export const metadata = {
  title: "Blog Category Details",
};
interface ViewCategoryProps {
  params: { id: string };
}

export default function ViewBlogCategory({ params }: ViewCategoryProps) {
  return <div>View blog category with ID: {params.id}</div>;
}
