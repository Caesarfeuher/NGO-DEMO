"use client";
import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

interface NewsProps {
  limit?: number;
  largeCards?: boolean;
  isHomePage?: boolean;
}

const News: React.FC<NewsProps> = ({ limit, largeCards, isHomePage }) => {
  const articles = [
    {
      title: "World Egg Day Event",
      date: "October 13, 2024",
      summary:
        "PHO celebrated World Egg Day by distributing free eggs to student specifically to Good Day Primary School,  Olambe, Ifo LGA, Ogun, families, educating them on the nutritional benefits of eggs.",
      image: "/news1.png",
      link: "/newslink1",
    },
    {
      title: "Greater Light of Heaven Church",
      date: "October 10, 2024",
      summary:
        'Organized a feeding program for homeless individuals, providing nutritious meals and basic hygiene kits during the Christmas holiday.',
      image: "/news2.png",
      link: "/newslink2",
    },
    {
      title: "Landmarks Limited Announces Partnership",
      date: "1st July, 2024",
      summary:
        "Landmarks Limited is pleased to announce a new partnership with Access Global, a leading brand in the industry. This collaboration will allow...",
      image: "/news3.png",
      link: "/newslink3",
    },
    // {
    //   title: "Lagos OOH Market Sees Rise in Digital Displays",
    //   date: "1st July, 2024",
    //   summary:
    //     "A recent report indicates a significant increase in digital out-of-home (DOOH) advertising spending in Lagos. The report attributes this growth to factors like...",
    //   image: "/news1.png",
    //   link: "/newslink4",
    // },
    // {
    //   title: "Landmarks Limited Delivers Brand Boost for Local Startup",
    //   date: "1st July, 2024",
    //   summary:
    //     'Lagos-based fitness startup, "Get Active", partnered with Landmarks Limited to launch a targeted OOH campaign across key locations...',
    //   image: "/news2.png",
    //   link: "/newslink5",
    // },
    // {
    //   title: "Landmarks Limited Announces Partnership",
    //   date: "1st July, 2024",
    //   summary:
    //     "Landmarks Limited is pleased to announce a new partnership with Access Global, a leading brand in the industry. This collaboration will allow...",
    //   image: "/news3.png",
    //   link: "/newslink6",
    // },
    // {
    //   title: "Lagos OOH Market Sees Rise in Digital Displays",
    //   date: "1st July, 2024",
    //   summary:
    //     "A recent report indicates a significant increase in digital out-of-home (DOOH) advertising spending in Lagos. The report attributes this growth to factors like...",
    //   image: "/news1.png",
    //   link: "/newslink7",
    // },
    // {
    //   title: "Landmarks Limited Delivers Brand Boost for Local Startup",
    //   date: "1st July, 2024",
    //   summary:
    //     'Lagos-based fitness startup, "Get Active", partnered with Landmarks Limited to launch a targeted OOH campaign across key locations...',
    //   image: "/news2.png",
    //   link: "/newslink8",
    // },
    // {
    //   title: "Landmarks Limited Announces Partnership",
    //   date: "1st July, 2024",
    //   summary:
    //     "Landmarks Limited is pleased to announce a new partnership with Access Global, a leading brand in the industry. This collaboration will allow...",
    //   image: "/news3.png",
    //   link: "/newslink9",
    // },
  ];

  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <div
      className={`relative p-6 md:px-12 lg:px-28 ${
        isHomePage ? "pb-12" : "pb-24" // Apply different bottom padding for home and news pages
      }`}
    >
      <div className="text-center mb-3 md:mb-12">
        <h2 className="mt-8 text-3xl md:text-4xl font-bold text-[#000E06] tracking-tight leading-tight md:leading-[52.8px]">
          Latest news
        </h2>
        {!isHomePage && (
          <>
            <p className="mt-2 text-center font-figtree font-normal text-base md:text-lg leading-normal md:leading-[30.6px] text-[#00170A]">
              Stay updated on industry trends and Landmarks Limited news.
            </p>
            <div className="flex flex-col md:flex-row justify-center mt-4 gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-md">
                <SearchIcon className="text-gray-500 ml-3" />
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
                  placeholder="Search for an article or keyword..."
                />
              </div>
              <button className="bg-[#01451E] text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedArticles.map((article, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg border border-gray-200 p-4 mx-2 ${
              isHomePage
                ? "w-full max-w-[calc(100%-16px)] h-auto"
                : "w-full max-w-[384px] h-auto md:h-[370px]"
            } flex flex-col`}
          >
            <div
              className={`bg-gray-300 flex items-center justify-center ${
                isHomePage ? "h-48 md:h-60 lg:h-72" : "h-36 md:h-48 lg:h-60"
              } mb-4 rounded-lg overflow-hidden`}
            >
              <img
                src={article.image}
                alt="News"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-normal text-[#000E06] leading-tight mb-2">
                {article.title}
              </h3>
              <p className="text-sm font-medium text-[#667185] leading-tight mb-2">
                {article.date}
              </p>
              <p className="text-sm font-medium text-[#667185] leading-tight mb-4 flex-grow">
                {article.summary}
              </p>
              <div className="flex justify-center mt-4">
                <Link href={article.link}>
                  <button className="w-full text-xs md:text-sm text-white bg-[#01451E] font-semibold px-2 py-1 rounded hover:bg-green-700 transition">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isHomePage && (
        <button className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-[#01451E] text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Show more
        </button>
      )}
    </div>
  );
};

export default News;