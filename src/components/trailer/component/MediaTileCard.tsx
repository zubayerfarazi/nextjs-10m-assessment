import Image from "next/image";

interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  list_page_visibility: boolean;
}

interface CTA {
  name: string;
}

interface MediaTileProps {
  data: {
    price: number;
    cta_text: CTA;
    checklist: ChecklistItem[];
  };
}

export default function MediaTileCard({ data }: MediaTileProps) {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-white text-black">
      <div className="mb-6">
        <p className="text-3xl font-extrabold text-primary mb-3">৳ 1000</p>
        <button className="bg-[var(--color-primary-button)] hover:bg-green-800 transition text-white font-semibold text-lg mt-2 w-full py-3 rounded-lg shadow cursor-pointer">
          {data.cta_text.name}
        </button>
      </div>

      <div>
        <p className="text-xl font-semibold mb-4">এই কোর্সে যা থাকছে</p>
        <div className="space-y-3">
          {data.checklist.map((check) =>
              <div key={check.id} className="flex items-center gap-3">
                <Image
                  src={check.icon}
                  alt={check.text}
                  width={32}
                  height={32}
                  className="rounded-full p-1 bg-gray-100 border border-gray-300"
                />
                <p className="text-md font-medium">{check.text}</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
