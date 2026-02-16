interface EditCategoryProps {
  params: { id: string };
}

export default function EditCategory({ params }: EditCategoryProps) {
  return <div>Edit category with ID: {params.id}</div>;
}
