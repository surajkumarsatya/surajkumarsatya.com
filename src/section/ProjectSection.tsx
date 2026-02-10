import Project from "@/components/Project";
import projectData from '@/data/projects.json'
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="container mx-auto max-w-3xl mt-20">
        <header className="mb-8 px-4 md:px-8">
            <p className="text-gray-600 dark:text-gray-300 text-sm" style={{ opacity: 1, transform: "none" }}>
            Featured
            </p>
            <h2 className="text-2xl font-bold" style={{ opacity: 1, transform: "none" }}>
            Projects
            </h2>
        </header>

        <Project projects={projectData} isHomePage={true}/>

        <div className="mt-8 flex justify-center"><Link className="cursor-pointer" href="/projects"><button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] border bg-background btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3">Show all projects</button></Link></div>

    </section>
  );
}
{/* <a 
                  href={item.webLink} 
                  className="text-gray-500 flex items-center gap-2 text-sm hover:underline underline-offset-4 hover:text-primary transition-colors duration-200 ease-[ease]"
                >
                  View Details <ArrowRight size={16} />
                </a> */}