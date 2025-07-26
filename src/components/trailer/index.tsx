import MediaTileCard from "./component/MediaTileCard";

const CourseTrailerInfo = ({ data }: any) => {
  return (
    <div className="bg-white w-full max-w-md mx-auto border border-gray-300">
      <MediaTileCard data={data}/>
    </div>
  );
};

export default CourseTrailerInfo;
