// NEw method

//1. /courses/[slug]/page.js
export async function generateMetadata({ params }) {
  const course = await fetchCourse(params.slug);

  return {
    title: course.title,
    description: course.summary,
  };
}

export default function CoursePage() {
  return <div>Course</div>;
}
// 2. dynamic template
export const metadata = {
  title: {
    default: "Edulink",
    template: "%s | Edulink",
  },
};
