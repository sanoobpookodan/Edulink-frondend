interface ViewAboutProps {
  params: { id: string };
}

export default function ViewAbout({ params }: ViewAboutProps) {
  return <div>View About item with ID: {params.id}</div>;
}
