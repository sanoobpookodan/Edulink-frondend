export const metadata = {
  title: "Blog Details",
};
interface ViewBlogProps {
  params: Promise<{ id: string }>;
}

export default async function ViewBlog({ params }: ViewBlogProps) {
  const { id } = await params;
  return <div>View blog with ID: {id}</div>;
}
