import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Info from "@/components/Info/Info";
import Feature from "@/components/Feature/Feature";
import Showcase from "@/components/Showcase/Showcase";
import Letswork from "@/components/Letswork/Letswork";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Feature />
      <Showcase />
      <Letswork />
      <Footer />
    </>
  );
}
