import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Mafiana Precious Legbefo",
      title: "Founder/CEO",
      image: "/mafianams.png", // Replace with the actual path to your image
    },
    {
      name: "Ogunwale Ganiyat Omotayo",
      title: "Vice President",
      image: "/ganiyat.png", // Replace with the actual path to your image
    },
    {
      name: "Mafiana Anthony Uche",
      title: "Chief Financial Officer",
      image: "/mafianasr.png", // Replace with the actual path to your image
    },
    {
      name: "Olaniyan Peter Shina",
      title: "Secretary",
      image: "/shina.png", // Replace with the actual path to your image
    },
    {
      name: "Obi Julie Odinde",
      title: "Director General",
      image: "/julie.png", // Replace with the actual path to your image
     
    },
  ];
  return (
    // first section

    <div className="">
      <section className="relative h-[50vh] bg-gray-800 text-white">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Team.</h1>
        </div>
        <Image
          src="/teamdna.jpeg" // Replace with the actual path to your image
          alt="Hero background"
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          className="z-0 opacity-80"
        />
      </section>

      {/* second section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8">
          Meet our team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index}className="relative bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center"> <Image  className=" h-60  mb-4 rounded-lg" objectFit="contain" src={member.image}  width={300}  height={300}  alt={`Team Member ${index + 1}`}/> <h3 className="text-lg font-medium text-gray-900">{member.name}</h3><p className="text-sm text-gray-500">{member.title}</p></div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;





<div className="w-full md:w-1/2 h-[50vh] relative" style={{backgroundImage: "url(/pretonialogo.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}> </div>