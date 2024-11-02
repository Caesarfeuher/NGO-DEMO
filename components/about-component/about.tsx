import Tabs from "../tabs-component/tab";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Top Section */}
      <section className="relative h-[100vh] sm:h-[50vh] bg-gray-800 text-white overflow-y-scroll bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/nature.png)" }} >
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mt-4 mb-4 leading-tight text-[#F9FAFB] font-aeonik">
      Our Story.
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-8 max-w-2xl leading-[30.6px] text-[#F9FAFB] font-figtree">
      In a small town far from the bustling cities, where opportunities were scarce and hope seemed distant, Pretoni Humanitarian Outreach 
      arrived with passion and a mission to transform lives. Through skills training, micro-finance, education, healthcare, and women&rsquo;s 
      empowerment, Pretoni helped the community become self-sufficient. Guided by values of compassion, integrity, and collaboration, the 
      organization focused on creating lasting, sustainable change. Pretoni believes that everyone, no matter their background, deserves the
      opportunity to thrive, and they work to make this vision a reality in the world&rsquo;s most forgotten corners.
    </p>
  </div>
</section>

      {/* Sections */}
      <div className="py-0">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Image div */}
          <div style={{backgroundImage: "url(/pretonilogo1.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}className="w-full md:w-1/2 h-[50vh] relative"> </div>
          {/* Write-up div */}
          <div
            className="w-full md:w-1/2 h-[50vh] flex items-center text-white"
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/maxsuriimg.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
            <div className="p-4 md:p-0 md:px-4 md:text-center break-words text-sm md:text-base leading-tight overflow-hidden">
              <h2 className="text-4xl font-bold md:text-2xl">Maxsuri Global</h2>
              <p>
              Maxsuri Global is an An indigenous healthcare organization providing support to access quality organic herbs for sustainable 
              economic growth and promoting healthy community gateway to a healthier, more sustainable way of living. Our story is one rooted 
              in a deep appreciation for the natural world and a commitment to bringing the benefits of organic living to your doorstep. 
              Maxsuri Global is a leading organic product network company committed to providing you with the finest organic products on the 
              market. Our platform serves as a bridge between organic producers, distributors, retailers, and consumers, ensuring that you have 
              access to a diverse and exceptional range of organic goods.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center">
          {/* Image div */}
          <div style={{backgroundImage: "url(/pretonilogo1.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}className="w-full md:w-1/2 h-[50vh] relative"> </div>
          {/* Write-up div */}
          <div
            className="w-full md:w-1/2 h-[50vh] flex items-center text-white"
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/kedi.webp)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
            <div className="p-4 md:p-0 md:px-4 md:text-center break-words text-sm md:text-base leading-tight overflow-hidden">
              <h2 className="text-4xl font-bold md:text-2xl">Kedi Healthcare Int'l</h2>
              <p>
                Partner in healthcare initiatives, providing access to high-quality supplements and healthcare products.<br/>
                KEDI is a leading health and wellness International Company based in China. KEDI group consists of KEDI 
                Healthcare Industries (Hong Kong) Limited, KEDI Healthcare Industries Nigeria Limited, Vitanature 
                Healthcare Industries (Ghana) Limited and Vitanature International Inc. (USA). 
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Image div */}
         <div style={{backgroundImage: "url(/pretonilogo1.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}className="w-full md:w-1/2 h-[50vh] relative"> </div>
          {/* Write-up div */}
          <div
            className="w-full md:w-1/2 h-[50vh] flex items-center text-white"
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/flourish.webp)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
            <div className="p-4 md:p-0 md:px-4 md:text-center break-words text-sm md:text-base leading-tight overflow-hidden">
              <h2 className="text-4xl font-bold md:text-2xl">Flourish Africa</h2>
              <p>
              Flourish Africa is a Supporter in business structuring and empowerment training the women empowerment movement 
              founded by Apostle Folorunso Alakija to serve as a catalyst for female empowerment and development. Borne out 
              of her passion to see women become truly fulfilled and empowered,the Flourish Africa movement was designed to 
              create a platform for both female millennials and adults alike tohave access to information that will help them 
              grow in the areas of their career, business, love, and relationships.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse md:items-center">
          {/* Image div */}
          <div style={{backgroundImage: "url(/pretonialogo.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}className="w-full md:w-1/2 h-[50vh] relative"> </div>
          {/* Write-up div */}
          <div
            className="w-full md:w-1/2 h-[50vh] flex items-center text-white"
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/pretonifarmz.png)",backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
            <div className="p-4 md:p-0 md:px-4 md:text-center break-words text-sm md:text-base leading-tight overflow-hidden">
              <h2 className="text-4xl font-bold md:text-2xl">Pretoni Farms</h2>
              <p>
              Pretoni Farms is a leading agro-allied company dedicated to producing and processing high-quality farm products. With a focus
               on sustainability and innovation, Pretoni Farms ensures that its agricultural practices not only meet industry standards but 
               also contribute to local economic growth. The farm&rsquo;s operations span crop cultivation, livestock farming, and food processing, 
               delivering fresh, organic, and processed goods to both local and international markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Component */}
      <Tabs />
    </>
  );
}
