export const metadata = {
  title: "About Details",
};
type ViewAboutProps = {
  params: Promise<{ id: string }>;
};

export default async function ViewAbout({ params }: ViewAboutProps) {
  const { id } = await params;

  return <div>View About item with ID: {id}</div>;
}
