import Navbar from "@/components/global-component/Navbar";
import Footer from "@/components/global-component/Footer";
import Hero from "@/components/home-component/hero";
import 'dotenv/config';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}
