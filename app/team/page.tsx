import Navbar from "@/components/global-component/Navbar";
import Team from "@/components/team-component/team";
import Footer from "@/components/global-component/Footer";



export default function TeamPagePage() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
          <Team />
        <Footer />
      </div>
    );
  }