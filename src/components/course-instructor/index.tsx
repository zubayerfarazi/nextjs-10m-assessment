import Image from "next/image";
import SectionHeader from "../section-header";

interface CourseInstructorProps {
  name: string;
  values: {
    description: string;
    image: string;
    name: string;
    short_description: string;
  }[];
}

const CourseInstructor = ({
  courseInstructor,
}: {
  courseInstructor: CourseInstructorProps;
}) => {
  const instructor = courseInstructor?.values?.[0];
  return (
    <div>
      <SectionHeader title={courseInstructor.name}/>

      <div className="flex items-center gap-6 bg-white border border-gray-300 rounded-xl p-6 mt-4">
        <div>
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className="rounded-full border-1 border-[var(--color-primary)] object-cover hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          />
        </div>

        <div>
          <p className="text-xl font-semibold">{instructor.name}</p>
          <div
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: instructor.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
