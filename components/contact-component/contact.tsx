"use client"; // Ensure this line is added for a client component
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapWithNoSSR = dynamic(() => import("../map-component/map"), {
  ssr: false,
});

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setLoading(false)
      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/contactimg.png")' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="flex flex-col md:flex-row items-start mx-4 md:mx-16 py-8 md:py-16 w-full">
          <div className="text-white md:w-1/2 p-4 md:p-8 md:mr-8">
            <h2 className="text-3xl -mt-10 md:text-4xl font-bold mb-0" style={{ fontFamily: "Aeonik", fontWeight: 500, fontSize: "44px", lineHeight: "52.8px", letterSpacing: "-2%", color: "#F0F2F5", }}>
              Contact Us
            </h2>
            <p className="text-base md:text-lg mb-6" style={{ fontFamily: "Figtree", fontWeight: 400, fontSize: "16px", lineHeight: "27.2px", color: "#F9FAFB", }}>
              Have questions about our services? We&apos;re here to help! Contact our team today.
            </p>

            <MapWithNoSSR />
          </div>

          <div className="bg-green-100 rounded-lg shadow-lg p-4 px-8 md:p-8 mt-8 md:mt-0 w-full md:w-1/2 max-w-md md:max-w-none" style={{ background: "#C2CDA9" }}>
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 mt-1 border text-black border-gray-300 rounded"
                    style={{ backgroundColor: "#E7EBDD" }}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-2 mt-1 border text-black border-gray-300 rounded"
                    style={{ backgroundColor: "#E7EBDD" }}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 mt-1 border text-black border-gray-300 rounded"
                  style={{ backgroundColor: "#E7EBDD" }}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6 flex-grow">
                <label htmlFor="message" className="block" style={{ fontFamily: "Figtree", fontWeight: 500, fontSize: "18px", lineHeight: "30.6px", color: "#4B5563" }}>
                  How can we help?
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 mt-1 border border-gray-300 text-black rounded h-full"
                  style={{ backgroundColor: "#E7EBDD" }}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 rounded w-full hover:bg-green-700"
                  style={{ backgroundColor: "#01451E", fontFamily: "Figtree", fontWeight: 600, fontSize: "16px", lineHeight: "27.2px", color: "#FFFFFF" }}
                >
                  {loading ? 'Sending.............' : 'Send message'}
                </button>
              </div>
              {statusMessage && (
                <p className="mt-4 text-center text-white">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
