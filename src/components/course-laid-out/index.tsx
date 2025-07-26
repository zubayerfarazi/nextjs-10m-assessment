import Image from "next/image";
import SectionHeader from "../section-header";

interface CourseLaidOutProps {
  name: string;
  values: {
    title: string;
    icon: string;
    subtitle: string;
    id: string;
  }[];
}

const CourseLaidOut = ({
  courseLaidOut,
}: {
  courseLaidOut: CourseLaidOutProps;
}) => {
  return (
    <div className="mt-6">
      <SectionHeader title={courseLaidOut.name}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[var(--color-primary)] rounded-xl p-6 mt-4">
        {courseLaidOut.values.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition duration-200 cursor-pointer"
          >
            <div className="shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={30}
                height={30}
                className="rounded-md"
              />
            </div>

            <div className="text-white">
              <p className="text-base md:text-lg font-semibold leading-snug">
                {feature.title}
              </p>
              {feature.subtitle && (
                <p className="text-sm text-justify mt-1 leading-relaxed">
                  {feature.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLaidOut;
