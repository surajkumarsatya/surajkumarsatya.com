import React from 'react';
import { Globe, Github, ArrowRight } from 'lucide-react';

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

const Project = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <section className="container mx-auto max-w-3xl px-8 mt-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
        {projects.map((item) => (
          <div key={item.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Project Image Area */}
            <div className=" overflow-hidden p-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Content Area */}
            <div className="p-4">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold leading-tight group-hover:text-primary hover:cursor-pointer">{item.title}</h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <a href={item.webLink} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                    <Globe size={20} strokeWidth={1.5} />
                  </a>
                  <a href={item.githubLink} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <p className="text-gray-500 text-[15px] leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Technologies Row */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-2 line-clamp-3">Technologies</p>
                <div className="flex flex-wrap gap-3 items-center">
                  {item.technologies.map((tech) => (
                    <TechIcon key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {/* Footer Row */}
              <div className="flex justify-between items-center pt-2">
                {
                    item.status == 'Building' ? 
                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-red-300 bg-red-500/10">
                    <span className="size-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    {item.status}
                    </div>
                :
                    <div className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-500/10">
                    <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {item.status}
                    </div>
                }
                <a 
                  href={item.webLink} 
                  className="text-gray-500 flex items-center gap-2 text-sm hover:underline underline-offset-4 hover:text-primary transition-colors duration-200 ease-[ease]"
                >
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Simplified TechIcon helper to match your reference image icons
const TechIcon = ({ name }: { name: string }) => {
  // Map names to specific SVG paths or simple image icons
  const iconMap: Record<string, string> = {
    nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
    typescript: "https://cdn.simpleicons.org/typescript/007ACC",
    react: "https://cdn.simpleicons.org/react/61DAFB",
    vercel: "https://cdn.simpleicons.org/vercel/000000",
    mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
    tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    bun: "https://cdn.simpleicons.org/bun/000000",
    appwrite: "https://cdn.simpleicons.org/appwrite/FD366E",
  };

  return (
    <img 
      src={iconMap[name.toLowerCase()] || `https://cdn.simpleicons.org/${name}`} 
      alt={name} 
      className="size-5 grayscale hover:grayscale-0 transition-all object-contain"
      title={name}
    />
  );
};

export default Project;