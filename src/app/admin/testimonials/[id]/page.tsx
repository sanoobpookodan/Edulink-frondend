export const metadata = {
  title: "Testimonial Details",
};
interface ViewTestimonialProps {
  params: { id: string };
}

export default function ViewTestimonial({ params }: ViewTestimonialProps) {
  return <div>View testimonial with ID: {params.id}</div>;
}
