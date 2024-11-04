import Link from "next/link";
import React from "react";

// Define the types for the News component props
interface NewsProps {
  limit?: number;
  largeCards?: boolean;
  isHomePage?: boolean;
}

// News Component
const News: React.FC<NewsProps> = ({ limit = 3, largeCards = false, isHomePage = false }) => {
  const articles = [
    {
      title: "World Egg Day Event",
      date: "October 13, 2024",
      summary:
        "PHO celebrated World Egg Day by distributing free eggs to students, specifically to Good Day Primary School, Olambe, Ifo LGA, Ogun, families, educating them on the nutritional benefits of eggs.",
      image: "/worldeggday.jpeg",
      link: "/newslink1",
    },
    {
      title: "Greater Light of Heaven Church",
      date: "October 10, 2024",
      summary:
        "Organized a feeding program for homeless individuals, providing nutritious meals and basic hygiene kits during the Christmas holiday.",
      image: "/greaterlight.jpeg",
      link: "/newslink2",
    },
    {
      title: "Landmarks Limited Announces Partnership",
      date: "1st July, 2024",
      summary:
        "Landmarks Limited is pleased to announce a new partnership with Access Global, a leading brand in the industry. This collaboration will allow...",
      image: "/womanfeeding.jpeg",
      link: "/newslink3",
    },
  ];

  const displayedArticles = articles.slice(0, limit);

  return (
    <div className="relative p-6 sm:px-4 md:px-10 lg:px-16 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col">
            <div className="bg-gray-300 flex items-center justify-center h-36 md:h-48 lg:h-80 mb-4 rounded-lg overflow-hidden">
              <img src={article.image} alt="News" className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-normal text-[#000E06] leading-tight mb-2">{article.title}</h3>
              <p className="text-sm font-medium text-[#667185] leading-tight mb-2">{article.date}</p>
              <p className="text-sm font-medium text-[#667185] leading-tight mb-4 flex-grow">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Outreach Component
export default function Outreach() {
  return (
    <>
      <section className="relative h-[50vh] sm:h-[50vh] bg-gray-800 text-white overflow-y-auto">
        <div className="z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mt-16 md:mt-16 mb-4 leading-tight text-[#F9FAFB] font-aeonik">
            Collaboration, yes. Competition, no.
          </h1>
          <p className="text-base sm:text-lg font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
            We are committed to advocating for you, supporting you in achieving your mission, raising the visibility of your work and tapping into the knowledge and resources of members together with national and international partners in healthcare, philanthropy, academia, and business to strengthen your organization and transform lives.
          </p>
        </div>
      </section>
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-8 leading-[40px] bg:leading-[60px] text-primary900 font-aeonik">
              The only place where we can share, collaborate and innovate together because we are peers, not competitors.
            </h2>
            <p className="text-[18px] font-[400] leading-[30.6px] text-[#00170A] font-figtree">
              Collaboration is far more powerful than competition because victory and success are much more meaningful when it comes not just from one person but from the joint achievements of many.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="/collab3.jpeg"
              alt="Billboard"
              width={536}
              height={567}
              className="rounded-lg shadow-lg w-[268px] h-[285px] object-cover mx-auto sm:w-[536px] sm:h-[567px]"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section>
        <News limit={3} largeCards={false} isHomePage={false} />
      </section>
    </>
  );
}

