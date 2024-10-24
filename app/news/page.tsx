import Navbar from "@/components/global-component/Navbar";
import News from "@/components/news-component/news";
import Footer from "@/components/global-component/Footer";


export default function NewsPage() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
          <News />
        <Footer />
      </div>
    );
  }