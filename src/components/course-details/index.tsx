"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SectionHeader from "../section-header";

interface CourseDetailItem {
  id: string;
  title: string;
  description: string;
}

interface CourseDetailsProps {
  data: {
    name: string;
    values: CourseDetailItem[];
  };
}

const CourseDetails = ({ data }: CourseDetailsProps) =>  {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="mt-6">
      <SectionHeader title={data.name}/>

      <div className="space-y-4 mt-4">
        {data.values.map((item, index) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-5 py-4 bg-gray-100 hover:bg-gray-200 text-left font-medium cursor-pointer"
            >
              <span
                dangerouslySetInnerHTML={{ __html: item.title }}
                className="text-base"
              />
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            {openIndex === index && (
              <div
                className="px-5 pb-5 mt-2 text-sm text-justify"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseDetails;