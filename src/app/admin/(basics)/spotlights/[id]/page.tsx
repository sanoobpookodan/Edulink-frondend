export const metadata = {
  title: "Spotlight Details",
};
type SpotlightPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ViewSpotlight({ params }: SpotlightPageProps) {
  const { id } = await params;

  return <div>View Spotlight with ID: {id}</div>;
}
