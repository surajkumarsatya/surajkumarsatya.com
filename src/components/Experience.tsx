"use client";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  logo: string;
  website: string;
  x: string;
  linkedin: string;
  status?: string;
  period: string;
  location: string;
  technologies?: string[];
  description: string[];
}

const Experience = ({
  experiences,
  isHomePage = false,
}: {
  experiences: ExperienceItem[];
  isHomePage?: boolean;
}) => {
  // Initialize state: if homepage, only index 0 is open. Otherwise, all are open.
  const [openItems, setOpenItems] = useState<Record<number, boolean>>(
    isHomePage
      ? { 0: true }
      : experiences.reduce((acc, _, idx) => ({ ...acc, [idx]: true }), {}),
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Limit to 3 if on homepage
  const displayedExperiences = isHomePage
    ? experiences.slice(0, 3)
    : experiences;

  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-8 mt-0">
      <div className="space-y-12">
        {displayedExperiences.map((job, index) => (
          <div key={job.id} className="group mb-4">
            {/* Header: Logo, Title, and Date */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg border-2 border-gray-200 dark:border-white/20 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="size-8 object-contain rounded-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold blur-none text-gray-900 dark:text-white">
                      {job.company}
                    </h3>
                    <a
                      target="_blank"
                      className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href={job.website}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                      </svg>
                    </a>
                    {/* <a
                      target="_blank"
                      className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href={job.x}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                      </svg>
                    </a> */}
                    <a
                      target="_blank"
                      className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href={job.linkedin}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                      </svg>
                    </a>
                    {job.status ? (
                      <span className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        {job.status}
                      </span>
                    ) : (
                      <button
                        onClick={() => toggleItem(index)}
                        className={`transition-transform duration-200 hover:cursor-pointer ${openItems[index] ? "rotate-180" : ""}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="size-4 text-gray-600 dark:text-neutral-300"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">{job.role}</p>
                </div>
              </div>

              <div className="text-gray-500 dark:text-neutral-400 flex flex-col md:text-right">
                <p className="">{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            {/* Collapsible Content Wrapper */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openItems[index]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="py-4">
                  {" "}
                  {/* Container for your content */}
                  {/* Technologies */}
                  {job.technologies && (
                    <div className="mb-4">
                      <h4 className="text-md mt-0 mb-2 font-semibold text-gray-800 dark:text-neutral-200">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => {
                          const iconSlug = tech
                            .toLowerCase()
                            .replace(/\s+/g, "")
                            .replace(/\./g, "dot");
                          const iconUrl = `https://cdn.simpleicons.org/${iconSlug}`;

                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-bold border border-dashed border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded shadow-inner"
                            >
                              <img
                                src={iconUrl}
                                alt=""
                                className="size-3.5 object-contain dark:invert"
                                onError={(e) =>
                                  (e.currentTarget.style.display = "none")
                                }
                              />
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {/* Description Points */}
                  <ul className="space-y-3">
                    {job.description.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 mb-1 text-gray-500 dark:text-neutral-400 items-start"
                      >
                        <span className="text-gray-400 dark:text-neutral-500 shrink-0">•</span>
                        <p className="text-[16px] leading-6">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
