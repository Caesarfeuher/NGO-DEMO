"use client";
import { useState } from "react";
import Image from "next/image";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col sm:flex-row w-full">
          <div
            onClick={() => handleClick("vision")}
            className={`p-4 cursor-pointer flex-1 text-center ${
              activeTab === "vision"
                ? "border-b-4 border-[#FFF000] bg-orange-300"
                : "bg-orange-500 hover:bg-orange-400"
            } text-white`}
          >
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/vision.png"
                alt="title"
                width={20}
                height={20}
                className="rounded-lg shadow-lg"
              />
              <span
                className={`block sm:hidden text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                Vision
              </span>
              <span
                className={`hidden sm:block text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                OUR VISION
              </span>
            </div>
          </div>

          {/* Mission */}
          <div
            onClick={() => handleClick("mission")}
            className={`p-4 cursor-pointer flex-1 text-center ${
              activeTab === "mission"
                ? "border-b-4 border-[#FFF000] bg-orange-300"
                : "bg-orange-500 hover:bg-orange-400"
            } text-white`}
          >
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/mission.png"
                alt="title"
                width={20}
                height={20}
                className="rounded-lg shadow-lg"
              />
              <span
                className={`block sm:hidden text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                Mission
              </span>
              <span
                className={`hidden sm:block text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                OUR MISSION
              </span>
            </div>
          </div>

          {/* Goal */}
          <div
            onClick={() => handleClick("goal")}
            className={`p-4 cursor-pointer flex-1 text-center ${
              activeTab === "goal"
                ? "border-b-4 border-[#FFF000] bg-orange-300"
                : "bg-orange-500 hover:bg-orange-400"
            } text-white`}
          >
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/goals.png"
                alt="title"
                width={20}
                height={20}
                className="rounded-lg shadow-lg"
              />
              <span
                className={`block sm:hidden text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                Goal
              </span>
              <span
                className={`hidden sm:block text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                OUR GOAL
              </span>
            </div>
          </div>

          {/* Values */}
          <div
            onClick={() => handleClick("values")}
            className={`p-4 cursor-pointer flex-1 text-center ${
              activeTab === "values"
                ? "border-b-4 border-[#FFF000] bg-orange-300"
                : "bg-orange-500 hover:bg-orange-400"
            } text-white`}
          >
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/values.png"
                alt="title"
                width={20}
                height={20}
                className="rounded-lg shadow-lg"
              />
              <span
                className={`block sm:hidden text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                Values
              </span>
              <span
                className={`hidden sm:block text-base font-bold`}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  lineHeight: "27.2px",
                  letterSpacing: "1px",
                  color: "#FFF000",
                }}
              >
                OUR CORE VALUES
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center mt-4 text-xl font-semibold">
        {activeTab === "vision" && (
          <p
            style={{
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "34px",
              color: "#00170A",
            }}
          >
            To create a world where every individual, regardless of their background or location, has access to education, 
            healthcare, economic empowerment, and the opportunity to thrive, with a particular focus on women and underprivileged communities.
          </p>
        )}
        {activeTab === "mission" && (
          <p
            style={{
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "34px",
              color: "#00170A",
            }}
          >
            To empower communities by providing access to education, healthcare, skills training, and micro-finance opportunities.
             We strive to improve lives, promote gender equality, and foster sustainable economic growth, particularly in rural 
             and underserved areas.
          </p>
        )}
        {activeTab === "goal" && (
          <div
            style={{
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "34px",
              color: "#00170A",
              textAlign: "left",
            }}
            className="ml-4"
          >
            <p>
              <b>1. Economic Empowerment:</b> To provide individuals with skills training and access to micro-finance, enabling them to become self-sufficient and improve their livelihoods.
            </p>
            <p>
              <b>2. Education for All:</b> To enhance educational opportunities for underprivileged children, ensuring that they have the tools they need for a brighter future.
            </p>
            <p>
              <b>3. Healthcare Access:</b> To improve healthcare in rural areas by providing medical services and promoting preventive care.
            </p>
            <p>
              <b>4. Women Empowerment:</b> To promote gender equality by empowering women through multifaceted trades, training, and leadership opportunities.
            </p>
            <p>
              <b>5. Sustainable Development:</b> To create programs that have long-lasting impacts on economic development and community well-being.
            </p>
          </div>
        )}
        {activeTab === "values" && (
          <div
            style={{
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "34px",
              color: "#00170A",
            }}
          >
            <ul className="flex flex-col sm:flex-row font-aeonik space-y-2 sm:space-y-0 sm:space-x-5">
              <li>
                <span className="font-bold text-xl">Integrity:</span>
                <span className="text-base"> We are committed to transparency and ethical practices in all our endeavors.</span>
              </li>
              <li>
                <span className="font-bold text-xl">Compassion:</span>
                <span className="text-base"> We approach our work with empathy and a deep desire to help others.</span>
              </li>
              <li>
                <span className="font-bold text-xl">Empowerment:</span>
                <span className="text-base"> We believe in equipping individuals with the tools they need to succeed.</span>
              </li>
              <li>
                <span className="font-bold text-xl">Collaboration:</span>
                <span className="text-base"> We build partnerships and work with communities to achieve shared goals.</span>
              </li>
              <li>
                <span className="font-bold text-xl">Sustainability:</span>
                <span className="text-base"> We focus on creating long-term solutions that have lasting impacts.</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
