interface EditSpotlightProps {
  params: { id: string };
}

export default function EditSpotlight({ params }: EditSpotlightProps) {
  return <div>Edit Spotlight with ID: {params.id}</div>;
}
