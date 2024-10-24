import Navbar from "@/components/global-component/Navbar";
import OutreachPage from "@/components/outreach-component/outreach";
import Footer from "@/components/global-component/Footer";


export default function Outreach() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
          <OutreachPage />
        <Footer />
      </div>
    );
  }