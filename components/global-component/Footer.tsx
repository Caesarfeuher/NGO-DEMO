"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/childhung.jpeg')" }}>
      <div className=" inset-0 bg-black opacity-100"></div>
      <div className="relative container mx-auto px-4 py-8 -mt-4 flex justify-center">
        <div className="md:pl-16 md:pt-12 w-full max-w-5xl grid grid-cols-2 gap-12 text-center md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 mb-4">About Us</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="#" className="hover:text-green-500">Mission</Link></li>
              <li><Link href="#" className="hover:text-green-500">Vision</Link></li>
              <li><Link href="#" className="hover:text-green-500">Team</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 mb-4">Services</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="#" className="hover:text-green-500">Digital Advertising</Link></li>
              <li><Link href="#" className="hover:text-green-500">Malls Advertising</Link></li>
              <li><Link href="#" className="hover:text-green-500">Digital Lamppost Advertising</Link></li>
              <li><Link href="#" className="hover:text-green-500">Digital Mobile Advertising</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 mb-4">News</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="#" className="hover:text-green-500">Customers</Link></li>
              <li><Link href="#" className="hover:text-green-500">Careers</Link></li>
              <li><Link href="#" className="hover:text-green-500">Pricing</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 mb-4">Contact</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="mailto:info@landmarks.com" className="hover:text-green-500">info@landmarks.com</Link></li>
              <li><Link href="tel:+2348177164374" className="hover:text-green-500">+234 817 716 4374</Link></li>
              <li><Link href="tel:+2348104914779" className="hover:text-green-500">+234 810 491 4779</Link></li>
            </ul>
            <div className="flex justify-center space-x-4 mt-4 md:justify-start">
              <Link href="/facebook">
                <Image src="/Facebook_logo.png" alt="Facebook" width={24} height={24} className="hover:text-green-500" />
              </Link>
              <Link href="/instagram">
                <Image src="/instagram-logo.png" alt="Instagram" width={24} height={24} className="hover:text-green-500" />
              </Link>
              <Link href="/linkedin">
                <Image src="/Linkedin_logo.png" alt="LinkedIn" width={24} height={24} className="hover:text-green-500" />
              </Link>
              <Link href="/twitter">
                <Image src="/Twitter-new-logo.png" alt="Twitter" width={24} height={24} className="hover:text-green-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          height: 429px;
        }
        @media (max-width: 1024px) {
          footer {
            height: 410px;
          }
        }
        @media (max-width: 767px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .font-aeonik {
          font-family: 'Aeonik', sans-serif;
        }
        .font-figtree {
          font-family: 'Figtree', sans-serif;
        }
        .text-20px {
          font-size: 20px;
        }
        .leading-24px {
          line-height: 24px;
        }
        .text-16px {
          font-size: 16px;
        }
        .leading-27.2px {
          line-height: 27.2px;
        }
        .text-gray-100 {
          color: #F0F2F5;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

