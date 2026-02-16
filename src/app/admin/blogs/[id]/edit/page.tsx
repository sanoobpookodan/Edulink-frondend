interface EditBlogProps {
  params: { id: string };
}

export default function EditBlog({ params }: EditBlogProps) {
  return <div>Edit blog with ID: {params.id}</div>;
}
