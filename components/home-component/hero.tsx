import Tabs from "../tabs-component/tab";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="flex justify-between">
        {/* Left section with text overlay */}
        <section className="w-1/2 relative h-screen bg-gray-800 text-white">
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
              When Change Needs a Network Own The Streets.
            </h1>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
              Welcome to Pretonia Humanitarian Outreach (PHO)! We're dedicated to uplifting grassroots communities through health, wellness, and economic empowerment. Explore our programs and join us in building a healthier, empowered future. Your support makes a lasting difference. Thank you for being part of our mission!
            </h3>
            <Link href="/give">
              <button className="w-full bg-orange-500 text-white font-bold py-2 px-6 rounded hover:bg-orange-400 transition-colors duration-300 mb-6">
                GIVE
              </button>
            </Link>
          </div>
          <img
            src="/together.webp"
            alt="Hero background"
            className="z-0 opacity-20 object-contain h-full w-full"
          />
        </section>

        {/* Right section with image */}
        <section className="w-1/2 h-screen relative overflow-hidden ">
          <img
            src="/pretoniawelcome.jpeg"
            alt="Welcome image"
            className="z-0 object-cover h-full w-full object-top"
          />
        </section>
      </section>

      {/* Divider Section with Image Background */}
      <section
        className="relative h-[100vh] sm:h-[50vh] bg-white overflow-y-scroll bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/SDGimg.png)" }}
      ></section>

      {/* Community Section */}
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-x-12">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary900 font-aeonik">
              We cultivate caring communities that advance health and opportunity for all.
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-[30.6px] text-[#00170A] font-figtree">
              We believe that true wellness goes beyond individual health—it's about fostering communities where everyone has the opportunity to thrive. By cultivating a culture of care and support, we create environments that empower people to lead healthier, more fulfilling lives. Together, we can break barriers, promote well-being, and ensure that no one is left behind in the pursuit of better health for all.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="/nurse.webp"
              alt="Nurse"
              className="rounded-lg shadow-lg object-cover mx-auto sm:w-[536px] sm:h-[567px]"
              style={{ width: '536px', height: '567px' }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="/nature.webp"
              alt="Nature"
              className="rounded-lg shadow-lg object-cover mx-auto"
              style={{ width: '536px', height: '567px' }}
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary900 font-aeonik">
              Be the Difference.
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-[30.6px] text-[#00170A] font-figtree">
              Taking action, no matter how small, to create positive change. It’s about stepping up, inspiring others, and making an impact in your community and beyond. Every choice you make, every effort you contribute, brings us closer to a healthier, more connected world. By being the difference, you help shape a future where everyone has the chance to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative h-[50vh] bg-gray-800 text-white">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
            Transforming Lives Together
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
            Together, we have the power to transform lives. When we join forces, we can overcome obstacles, uplift each other, and create lasting change. Every action we take, big or small, ripples through our communities, inspiring hope and opening doors to new possibilities. Let’s keep pushing forward, united in our vision, and transform lives—together—one step at a time.
          </p>
        </div>
        <img
          src="/kids.webp"
          alt="Kids"
          className="z-0 opacity-20 object-cover w-full h-full"
        />
      </section>

      {/* Tabs Section */}
      <div className="mt-18">
        <Tabs />
      </div>
    </>
  );
}


