import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../section-header";

interface WhatYouWillLearnDataProps {
  name: string;
  description?: string;
  values: {
    id: string;
    text: string;
  }[];
}

export default function WhatYouWillLearnSection({
  data,
}: {
  data: WhatYouWillLearnDataProps;
}) {
  return (
    <section className="mt-6">
      <SectionHeader title={data.name}/>
      {data.description && (
        <p className="text-base text-gray-600 mb-6">{data.description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {data.values.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.015] transition-all duration-300"
          >
            <div className="relative flex-shrink-0 w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <FaCheckCircle className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            <p className="text-gray-800 leading-relaxed font-medium text-[15px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
