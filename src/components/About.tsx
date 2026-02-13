"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  icon: string;
}

interface AboutData {
  name: string;
  avatar: string;
  bio: string;
  skills: Skill[];
}

const About = ({ data }: { data: AboutData }) => {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-start max-w-4xl">
      {/* Pixel Avatar */}
      <div className="shrink-0">
        <div className="size-48 md:size-56 rounded-xl overflow-hidden bg-blue-300 dark:bg-yellow-400 shadow-sm border border-gray-100 dark:border-white/10">
          <img 
            src={data.avatar} 
            alt={data.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {data.name}
        </h1>
        
        <p className="text-md text-gray-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
          {data.bio}
        </p>

        {/* Skills Section */}
        <div className="pt-4">
          <h3 className="text-sm font-bold tracking-widest text-gray-400 dark:text-neutral-500 mb-4">
            Skills
          </h3>
          <TooltipProvider delayDuration={200}>
            <div className="flex flex-wrap gap-2 items-center">
              {data.skills.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="size-7 object-contain cursor-default dark:invert"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-black dark:bg-white text-white dark:text-black border-none text-xs">
                    <p className="lowercase">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default About;
