import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pretonia Humanitarian Outreach",
  description: "nurturing, empowering and improving lives",
  keywords: ["Pretonia", "Humanitarian Outreach", "Health Awareness", "Wellness", "Women Empowerment"],
   openGraph: {
    title: "Pretonia Humanitarian Outreach",
    description: "nurturing, empowering and improving lives",
    url: "https://pretoniahumanitarianoutreach.com",
    images: [
      {
        url: "/pretonialogo.png", // Update with your image path
        width: 1200,
        height: 630,
        alt: "Pretonia Humanitarian Outreach Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pretonia Humanitarian Outreach",
    description: "nurturing, empowering and improving lives",
    images: ["/pretonialogo.png"], // Update with your image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // return (
  //   <html lang="en">
  //     <body
  //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //     >
  //       {children}
  //     </body>
  //   </html>
  // );
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header>
        <h1>Pretonia Humanitarian Outreach</h1>
        <p>nurturing, empowering and improving lives</p>
        <img src="/pretonialogo.png" alt="Pretonia Humanitarian Outreach Banner" width="100%" />
      </header>
      {children}
    </body>
  </html>
  );
}
