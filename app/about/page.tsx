import Navbar from "@/components/global-component/Navbar";
import AboutPage from "@/components/about-component/about";
import Footer from "@/components/global-component/Footer";


export default function About() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
          <AboutPage />
        <Footer />
      </div>
    );
  }