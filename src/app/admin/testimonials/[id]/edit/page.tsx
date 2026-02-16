interface EditTestimonialProps {
  params: { id: string };
}

export default function EditTestimonial({ params }: EditTestimonialProps) {
  return <div>Edit testimonial with ID: {params.id}</div>;
}
