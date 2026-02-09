import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Intro } from "@/components/Intro";
import Experience from "@/components/Experience";
import experienceData from '@/data/experience.json'
import ExperienceSection from "@/section/ExperienceSection";
import ProjectSection from "@/section/ProjectSection";

export default function Home() {
  return (
    <section>
      <Intro />
      <ExperienceSection />
      <ProjectSection />
    </section>
  );
}
