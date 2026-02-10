import { Intro } from "@/components/Intro";
import ExperienceSection from "@/section/ExperienceSection";
import ProjectSection from "@/section/ProjectSection";
import AboutSection from "@/section/AboutSection";
import GithubSection from "@/section/GithubSection";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Intro />

      {/* SEO-friendly internal links */}
      <p className="max-w-3xl mx-auto mt-6 text-base text-neutral-600 dark:text-neutral-400">
        You can explore my{" "}
        <Link
          href="/projects"
          className="underline hover:text-black dark:hover:text-white"
        >
          projects
        </Link>
        , view my{" "}
        <Link
          href="/work-experience"
          className="underline hover:text-black dark:hover:text-white"
        >
          work experience
        </Link>
        , or{" "}
        <Link
          href="/contact"
          className="underline hover:text-black dark:hover:text-white"
        >
          contact me
        </Link>
        .
      </p>

      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
      <GithubSection />
    </section>
  );
}
