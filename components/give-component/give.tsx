import Image from "next/image";


export default function Give() {
    return (
      <>
      <section className="relative h-[100vh] sm:h-[50vh] bg-gray-800 text-white overflow-y-scroll bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/healthy.jpeg)" }} >
      {/* <section className="relative mb-0 h-[50vh] md:h-[50vh] bg-gray-900 text-white"> */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
        Everyone deserves a healthy life
        </h1>
        <p className="text-base sm:text-lg font-normal mt-6 mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
        Join hands with us in improving the health and well-being of people by providing them best
        </p>
      </div>
      {/* <Image src="/healthy.jpeg"  alt="Hero background" layout="fill" objectFit="contain" objectPosition="center" className="z-0 opacity-50" /> */}
    </section>
    
    <br/>
    <div className="relative mb-0 h-[50vh] md:h-[50vh] bg-dark bg-green-500 text-white">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-md sm:text-5xl md:text-4xl font-bold p-2 leading-tight text-[#F9FAFB] font-aeonik">We Rise By Lifting Others. Support Us with Your Donations Every Contribution Counts, and We Promise Full Transparency.<br/><br/>ACCOUNT INFORMATION</h1>
        <p className="-ml-36 text-md sm:text-3xl font-normal mt-6 mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree text-left">
        BANK:<br/>
        ACCOUNT NAME:<br/>
        ACCOUNT NUMBER:<br/>
        </p>
        
      </div>
      
    </div>
    <section className="bg-white text-gray-800">
     <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-x-12">
       <div className="w-full lg:w-1/2 p-4">
         <h2 className="text-2xl sm:text-5xl font-bold mb-8 leading-[40.2px] text-primary900 font-aeonik">
         We cultivate caring communities that advance health and opportunity for all.
         </h2>
         <p className="text-[18px] font-[400]  leading-[30.6px] text-[#00170A] font-figtree">
         Hunger is not always visible, but even when you can&rsquo;t see it, hunger is widespread. From developing countries to the United States,
         children and families don&rsquo;t always have enough to eat. Knowing the hunger facts will help us work towards a solution together.
         </p>
       </div>
       <div className="w-full lg:w-1/2 p-4">
         <Image
           src="/give3.avif" // Replace with the actual path to your image
           alt="Billboard"
           width={536}
           height={567}
           className="rounded-lg shadow-lg sm:w-[536px] sm:h-[567px] w-[268px] h-[285px] object-cover mx-auto"
         />
       </div>
     </div>
   </section>
   <section className="bg-white text-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
       <div className="w-full lg:w-1/2 p-4">
          <Image
            src="/givsaco.png" // Replace with the actual path to your image
            alt="Billboard"
            width={536}
            height={567}
            className="rounded-lg shadow-lg sm:w-[536px] sm:h-[567px] w-[268px] h-[285px] object-cover mx-auto"
          />
        </div>
      <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-5xl font-bold mb-8 leading-[57.2px] text-primary900 font-aeonik">
          Be the Difference.
          </h2>
          <p className="text-[18px] font-[400]  leading-[30.6px] text-[#00170A] font-figtree">
          Your tax-deductible gift advances innovative programs that bring together the knowledge and resources of our nationwide network with
           strategic partners to impact communities at scale.With your support, we can drive transformational change in communities
          where our network collectively reaches. Together, we can achieve a healthier, more equitable future so all communities can thrive.
          </p>
        </div>
      </div>
    </section>
    </>
    );
  }
  