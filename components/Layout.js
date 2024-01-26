import { Inter } from "next/font/google";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VivaTera | Real Estate Business App",
  description: "Created using Strapi CMS and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <main className={inter.className}>

        {children}
      </main >
    </>


  );
}
