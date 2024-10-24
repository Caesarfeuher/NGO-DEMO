import Image from "next/image";
import Tabs from "../tabs-component/tab";
import Link from "next/link";

// export default function Hero() {
//   return (
//     <>
//     <section className="relative h-screen bg-gray-800 text-white">
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//         <div>
//           <h1 className="text-6xl 2xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
//           When Change Needs a Network
//           </h1>
//           <h1 className="text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
//             Own The Streets.
//           </h1>
//         </div>
//         <h3 className="text-lg font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
//          When change needs a movement, own the streets! Rise up, take action, and lead the way. Together, we are the unstoppable force that
//          transforms communities and creates the future we believe in. Be bold. Be loud. Own the streets! The power to drive change is in our
//          hands!
//         </h3>
//         <Link href="/give">
//       <button className="w- full bg-orange-500 text-white font-bold py-2 px-6 rounded hover:bg-orange-400 transition-colors duration-300 mb-6">
//         GIVE
//       </button>
//     </Link>
//       </div>
//       <Image
//         src="/heroimg.png"
//         alt="Hero background"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="z-0 opacity-40"
//       />
//     </section>
//      <section className="bg-white text-gray-800">
//      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
//        <div className="w-full lg:w-1/2 p-4">
//          <h2 className="text-5xl font-bold mb-8 leading-[57.2px] text-primary900 font-aeonik">
//          We cultivate caring communities that advance health and opportunity for all.
//          </h2>
//          <p className="text-[18px] font-[400]  leading-[30.6px] text-[#00170A] font-figtree">
//          We believe that true wellness goes beyond individual health—it's about fostering communities where everyone has the opportunity to thrive.
//           By cultivating a culture of care and support, we create environments that empower people to lead healthier, more fulfilling lives.
//           Together, we can break barriers, promote well-being, and ensure that no one is left behind in the pursuit of better health for all.
//          </p>
//        </div>
//        <div className="w-full lg:w-1/2 p-4">
//          <Image
//            src="/aboutimg.png" // Replace with the actual path to your image
//            alt="Billboard"
//            width={536}
//            height={567}
//            className="rounded-lg shadow-lg w-[536px] h-[567px] object-cover mx-auto"
//          />
//        </div>
//      </div>
//    </section>
//    <section className="bg-white text-gray-800">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
//        <div className="w-full lg:w-1/2 p-4">
//           <Image
//             src="/aboutimg.png" // Replace with the actual path to your image
//             alt="Billboard"
//             width={536}
//             height={567}
//             className="rounded-lg shadow-lg w-[536px] h-[567px] object-cover mx-auto"
//           />
//         </div>
//       <div className="w-full lg:w-1/2 p-4">
//           <h2 className="text-5xl font-bold mb-8 leading-[57.2px] text-primary900 font-aeonik">
//           Be the Difference.
//           </h2>
//           <p className="text-[18px] font-[400]  leading-[30.6px] text-[#00170A] font-figtree">
//            Taking action, no matter how small, to create positive change. It&rsquo;s about stepping up, inspiring others,
//            and making an impact in your community and beyond. Every choice you make, every effort you contribute, brings us closer to a healthier,
//             more connected world. By being the difference, you help shape a future where everyone has the chance to thrive.
//           </p>
//         </div>
//       </div>
//     </section>
//     <section className="relative mb-0 h-[50vh] md:h-[50vh] bg-gray-800 text-white">
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
//           Transforming Lives Together
//         </h1>
//         <p className="text-base sm:text-lg font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
//         Together, we have the power to transform lives. When we join forces, we can overcome obstacles, uplift each other, and create lasting change.
//          Every action we take, big or small, ripples through our communities, inspiring hope and opening doors to new possibilities. Let&rsquo;s keep pushing
//           forward, united in our vision, and transform lives—together—one step at a time.
//         </p>
//       </div>
//       <Image
//         src="/heroimg.png" // Replace with the actual path to your image
//         alt="Hero background"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="z-0 opacity-40"
//       />
//     </section>
//     <div className="mt-18">
//         <Tabs/>
//     </div>
//    </>
   
//   );
// }

export default function Hero() {
  return (
    <>
      <section className="relative h-screen bg-gray-800 text-white">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 ">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
              When Change Needs a Network
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
              Own The Streets.
            </h1>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
            When change needs a movement, own the streets! Rise up, take action, and lead the way. Together, we are the unstoppable force that
            transforms communities and creates the future we believe in. Be bold. Be loud. Own the streets! The power to drive change is in our hands!
          </h3>
          <Link href="/give">
            <button className="w-full bg-orange-500 text-white font-bold py-2 px-6 rounded hover:bg-orange-400 transition-colors duration-300 mb-6">
              GIVE
            </button>
          </Link>
        </div>
        <Image
          src="/together.webp"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 opacity-20"
        />
      </section>

      {/* Remaining sections with similar text adjustments */}
      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-x-12">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary900 font-aeonik">
              We cultivate caring communities that advance health and opportunity for all.
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-[30.6px] text-[#00170A] font-figtree">
              We believe that true wellness goes beyond individual health—it's about fostering communities where everyone has the opportunity to thrive.
              By cultivating a culture of care and support, we create environments that empower people to lead healthier, more fulfilling lives.
              Together, we can break barriers, promote well-being, and ensure that no one is left behind in the pursuit of better health for all.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <Image
              src="/nurse.webp"
              alt="Billboard"
              width={536}
              height={567}
              className="rounded-lg shadow-lg w-[268px] h-[285px] object-cover mx-auto sm:w-[536px] sm:h-[567px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-x-12">
          <div className="w-full lg:w-1/2 p-4">
            <Image
              src="/nature.jpg"
              alt="Billboard"
              width={536}
              height={567}
              className="rounded-lg shadow-lg w-[268px] h-[285px] sm:w-[536px] sm:h-[567px] object-cover mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-primary900 font-aeonik">
              Be the Difference.
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-[30.6px] text-[#00170A] font-figtree">
              Taking action, no matter how small, to create positive change. It&rsquo;s about stepping up, inspiring others, and making an impact in your
              community and beyond. Every choice you make, every effort you contribute, brings us closer to a healthier, more connected world. By
              being the difference, you help shape a future where everyone has the chance to thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] bg-gray-800 text-white">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#F9FAFB] font-aeonik">
            Transforming Lives Together
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
            Together, we have the power to transform lives. When we join forces, we can overcome obstacles, uplift each other, and create lasting
            change. Every action we take, big or small, ripples through our communities, inspiring hope and opening doors to new possibilities.
            Let&rsquo;s keep pushing forward, united in our vision, and transform lives—together—one step at a time.
          </p>
        </div>
        <Image
          src="/kids.webp"
          alt="Hero background"
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          className="z-0 opacity-20"
        />
      </section>
      <div className="mt-18">
        <Tabs />
      </div>
    </>
  );
}

