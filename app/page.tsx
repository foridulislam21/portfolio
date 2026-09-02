import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Motion } from "@/components/Motion";

export default function Home() {
  return <div id="top"><Navbar/><main><Motion><Hero/></Motion><Motion><About/></Motion><Motion><Skills/></Motion><Motion><Projects/></Motion><Motion><Experience/></Motion><Motion><Contact/></Motion></main><Footer/></div>;
}