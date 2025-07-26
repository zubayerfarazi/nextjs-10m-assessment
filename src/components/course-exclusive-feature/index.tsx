import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import SectionHeader from "../section-header";

interface ExclusiveFeatureItem {
  id: string;
  title: string;
  file_url?: string;
  checklist: string[];
}

interface CourseExclusiveFeatureProps {
  data: {
    name: string;
    values: ExclusiveFeatureItem[];
  };
}

const CourseExclusiveFeature = ({ data }: CourseExclusiveFeatureProps) => {
  return (
    <div className="mt-6">
      <SectionHeader title={data.name}/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.values.map((item) => (
          <div
            key={item.id}
            className="bg-white-50/40 rounded-xl shadow-sm hover:shadow-md p-5 transition duration-200"
          >
            {item.file_url && (
              <Image
                src={item.file_url}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-lg font-semibold mb-3">{item.title}</p>

            <ul className="space-y-2 text-gray-700">
              {item.checklist.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExclusiveFeature;
