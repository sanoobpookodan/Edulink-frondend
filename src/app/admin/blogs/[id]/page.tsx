interface ViewBlogProps {
  params: { id: string };
}

export default function ViewBlog({ params }: ViewBlogProps) {
  return <div>View blog with ID: {params.id}</div>;
}
