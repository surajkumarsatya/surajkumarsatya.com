import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Intro } from "@/components/Intro";
import Experience from "@/components/Experience";
import experienceData from '@/data/experience.json'
import ExperienceSection from "@/section/ExperienceSection";
import ProjectSection from "@/section/ProjectSection";
import AboutSection from "@/section/AboutSection";
import GithubSection from "@/section/GithubSection";

export default function Home() {
  return (
    <section>
      <Intro />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <GithubSection />
    </section>
  );
}
