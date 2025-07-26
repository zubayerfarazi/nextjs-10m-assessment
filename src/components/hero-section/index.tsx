import MediaSlider from "../trailer/component/MediaSlider";

interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

interface HeroProps {
  data: {
    title: string;
    description?: string;
    media: MediaItem[];
  };
}

const Hero = ({ data }: { data: HeroProps["data"] }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-2 md:px-6 md:py-10 flex items-center flex-wrap-reverse md:flex-nowrap gap-10 md:gap-20">
      <div>
        <p className="text-3xl md:text-4xl font-bold">{data.title}</p>
        {data.description && (
          <p
            dangerouslySetInnerHTML={{ __html: data.description }}
            className="text-justify mt-4"
          />
        )}
      </div>

      <div className="md:h-55">
        <MediaSlider media={data.media} />
      </div>
    </div>
  );
};

export default Hero;
