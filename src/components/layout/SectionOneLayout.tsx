import Advertisement from "../advertisement";
import CourseDetails from "../course-details";
import CourseDetailsTabs from "../course-details-tab";
import CourseExclusiveFeature from "../course-exclusive-feature";
import CourseInstructor from "../course-instructor";
import CourseLaidOut from "../course-laid-out";
import WhatYouWillLearnSection from "../learn-by-doing-course";
import TestimonialsSection from "../testimonial";
import MediaTileCard from "../trailer/component/MediaTileCard";

const courseTabs = [
  { id: "course-instructor", title: "Course Instructor" },
  { id: "course-laid-out", title: "How the Course is Laid Out" },
  {
    id: "what-you-will-learn-by-doing-the-course",
    title: "What you will learn by doing the course",
  },
  { id: "course-details", title: "Course Details" },
  { id: "course-exclusive-feature", title: "Course Exclusive Feature" },
  { id: "course-features", title: "Course Features" },
];

const SectionOneLayout = ({ data }: { data: any }) => {
  const courseInstructor = data.sections.find(
    (section: any) => section.type === "instructors"
  );
  const courseLaidOut = data.sections.find(
    (section: any) => section.type === "features"
  );
  const learnByDoingCourse = data.sections.find(
    (section: any) => section.type === "pointers"
  );
  const courseExclusiveFeature = data.sections.find(
    (section: any) => section.type === "feature_explanations"
  );
  const about = data.sections.find((section: any) => section.type === "about");
  const advertisementData = data.sections.find(
    (section: any) => section.type === "group_join_engagement"
  );
  const studentOpinion = data.sections.find(
    (section: any) => section.type === "testimonials"
  );

  return (
    <div className="w-full container max-w-screen-lg md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
      <div className="px-2 md:px-16 flex flex-wrap-reverse md:flex-nowrap items-start">
        <div className="w-full md:w-2/3 space-x-4">
          <CourseDetailsTabs tabs={courseTabs} />
          <div id="course-instructor" className="mt-4">
            <CourseInstructor courseInstructor={courseInstructor} />
          </div>
          <div id="course-laid-out" className="md:mr-4">
            <CourseLaidOut courseLaidOut={courseLaidOut} />
          </div>
        </div>
        <div className="w-full md:max-w-sm border-x border-b border-gray-300 md:pt-10">
          <MediaTileCard data={data} />
        </div>
      </div>

      <div className="px-2 md:px-12 mx-4 space-x-4">
        <div className="w-full md:w-2/3">
          <Advertisement groupData={advertisementData} />
        </div>
      </div>

      <div className="px-2 md:px-12 flex flex-wrap-reverse md:flex-nowrap items-start">
        <div className="w-full md:w-2/3 space-x-4">
          <div id="what-you-will-learn-by-doing-the-course">
            <WhatYouWillLearnSection data={learnByDoingCourse} />
          </div>
          <div id="course-exclusive-feature">
            <CourseExclusiveFeature data={courseExclusiveFeature} />
          </div>
          <div id="course-details">
            <CourseDetails data={about} />
          </div>
          <div className="md:mr-4">
            <TestimonialsSection data={studentOpinion} />
          </div>
        </div>
        <div className="hidden md:block border border-gray-300 sticky top-24 self-start mt-10">
          <MediaTileCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default SectionOneLayout;
