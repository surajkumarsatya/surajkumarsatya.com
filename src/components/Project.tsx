import { Globe, Github, ArrowRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ProjectData {
  id: number;
  title: string;
  image: string;
  description: string;
  webLink: string;
  githubLink: string;
  status: string;
  technologies: string[];
}

const Project = ({ projects, isHomePage = false }: { projects: ProjectData[]; isHomePage?: boolean }) => {
  const displayedProjects = isHomePage ? projects.slice(0, 4) : projects;

  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-8 mt-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
        {displayedProjects.map((item) => (
          <div
            key={item.id}
            className="group bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="overflow-hidden p-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-77.5 h-37.5 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold leading-tight group-hover:text-primary hover:cursor-pointer text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 dark:text-neutral-400">
                  <a
                    href={item.webLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Globe size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <p className="text-gray-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="mb-4">
                <p className="text-gray-500 dark:text-neutral-400 text-sm font-semibold leading-relaxed mb-2 line-clamp-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <TooltipProvider>
                    {item.technologies.map((tech) => (
                      <TechIcon key={tech} name={tech} />
                    ))}
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                {
                  item.status == 'Building' ? 
                  <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-red-300 dark:border-red-400/40 bg-red-500/10">
                    <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    {item.status}
                  </div>
                :
                  <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 dark:border-green-400/40 bg-green-500/10">
                    <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {item.status}
                  </div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, string> = {
    nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
    typescript: "https://cdn.simpleicons.org/typescript/007ACC",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    vercel: "https://cdn.simpleicons.org/vercel/000000",
    tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    shadcnui: "https://cdn.simpleicons.org/shadcnui/000000",
    emailjs: "https://cdn.simpleicons.org/minutemailer/FFBE00",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <img 
          src={iconMap[name.toLowerCase()] || `https://cdn.simpleicons.org/${name}`}
          alt={name}
          className="size-5 object-contain dark:invert"
        />
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs font-semibold">{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Project;
