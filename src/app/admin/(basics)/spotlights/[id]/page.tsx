interface ViewSpotlightProps {
  params: { id: string };
}

export default function ViewSpotlight({ params }: ViewSpotlightProps) {
  return <div>View Spotlight with ID: {params.id}</div>;
}
