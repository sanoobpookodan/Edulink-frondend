export const metadata = {
  title: "Spotlight Details",
};
interface ViewSpotlightProps {
  params: { id: string };
}

export default function ViewSpotlight({ params }: ViewSpotlightProps) {
  return <div>View Spotlight with ID: {params.id}</div>;
}
