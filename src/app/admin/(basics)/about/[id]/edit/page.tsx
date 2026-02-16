interface EditAboutProps {
  params: { id: string };
}

export default function EditAbout({ params }: EditAboutProps) {
  return <div>Edit About item with ID: {params.id}</div>;
}
