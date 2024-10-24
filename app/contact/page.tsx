import Navbar from "@/components/global-component/Navbar";
import Contact from "@/components/contact-component/contact";
import Footer from "@/components/global-component/Footer";


export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
          <Contact />
        <Footer />
      </div>
    );
  }