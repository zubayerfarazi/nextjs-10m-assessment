import Image from "next/image";
import Link from "next/link";

interface AdvertisementProps {
  groupData: {
    values: {
      title: string;
      description: string;
      title_color: string;
      description_color: string;
      top_left_icon_img: string;
      background: {
        image: string;
      };
      thumbnail: string;
      cta: {
        text: string;
        clicked_url: string;
      };
    }[];
  };
}


const Advertisement = ({ groupData }: AdvertisementProps) => {
  return (
    <div
      className="rounded-xl p-6 md:p-8 bg-cover bg-center text-white relative overflow-hidden mt-6"
      style={{
        backgroundImage: `url(${groupData.values[0].background.image})`,
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-15">
        <div>
          <Image
            src={groupData.values[0].top_left_icon_img}
            alt="icon"
            width={200}
            height={100}
          />

          <p
            className="text-xl font-bold mt-4"
            style={{ color: groupData.values[0].title_color }}
          >
            {groupData.values[0].title}
          </p>
          <p
            className="mt-2"
            style={{ color: groupData.values[0].description_color }}
          >
            {groupData.values[0].description}
          </p>

          <Link href={groupData.values[0].cta.clicked_url} className="bg-[var(--color-primary-button)] py-3 px-2 rounded-md font-semibold block mt-4 text-center cursor-pointer">
            {groupData.values[0].cta.text}
          </Link>
        </div>

        <div>
          <Image
            src={groupData.values[0].thumbnail}
            alt={groupData.values[0].title}
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
