"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center text-white" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/childhung.jpeg')" }}>
      <div className="inset-0 bg-black opacity-100"></div>
      <div className="relative container mx-auto px-4 py-8 -mt-4 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center md:flex-row md:justify-evenly gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start md:mb-10">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 mb-4">About Us</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="/" className="hover:text-green-500">Mission</Link></li>
              <li><Link href="/" className="hover:text-green-500">Vision</Link></li>
              <li><Link href="/" className="hover:text-green-500">Team</Link></li>
              <li><Link href="https://sdgs.un.org/goals" className="hover:text-green-500">SDG</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start mb-20">
            <h2 className="font-aeonik font-medium text-20px leading-24px text-gray-100 md:mt-20 mb-4">Contact</h2>
            <ul className="font-figtree font-regular text-16px leading-27.2px text-gray-100">
              <li><Link href="mailto:info@landmarks.com" className="hover:text-green-500">admin@pretoniahumanitarianoutreach.com</Link></li>
              <li><Link href="tel:+2348177164374" className="hover:text-green-500">+234 817 716 4374</Link></li>
              <li><Link href="tel:+2348104914779" className="hover:text-green-500">+234 810 491 4779</Link></li>
            </ul>
            <div className="flex justify-center space-x-12 mt-4 md:justify-start">
              <Link href="/facebook">
                <Image src="/facebooklogo.png" alt="Facebook" width={24} height={24} className="hover:text-green-500" />
              </Link>
              <Link href="/instagram">
                <Image src="/instalogo.png" alt="Instagram" width={24} height={24} className="hover:text-green-500" />
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
