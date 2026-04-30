export const metadata = {
  title: "Testimonial Details",
};
interface ViewTestimonialProps {
  params: Promise<{ id: string }>;
}

export default async function ViewTestimonial({ params }: ViewTestimonialProps) {
  const { id } = await params;
  return <div>View testimonial with ID: {id}</div>;
}
