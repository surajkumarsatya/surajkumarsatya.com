interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  logo: string;
  status?: string;
  period: string;
  location: string;
  technologies: string[];
  description: string[];
}

const Experience = ({ experiences }: { experiences: ExperienceItem[] }) => {
  return (
    <section className="container mx-auto max-w-3xl px-8 mt-0">
      <div className="space-y-12">
        {experiences.map((job) => (
          <div key={job.id} className="group">
            {/* Header: Logo, Title, and Date */}
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg border-2 border-gray-200  flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="size-8 object-contain rounded-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg font-bold blur-none">
                      {job.company}
                    </h3>
                    <a
                      target="_blank"
                      className="size-4 text-neutral-500"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      className="size-4 text-neutral-500"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      className="size-4 text-neutral-500"
                      data-state="closed"
                      data-slot="tooltip-trigger"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                      </svg>
                    </a>
                    {job.status ? (
                      <span className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                        <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        {job.status}
                      </span>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="size-4"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{job.role}</p>
                </div>
              </div>

              <div className="text-gray-500 flex flex-col md:text-right">
                <p className="">{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-md mt-6 mb-2 font-semibold">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-1 text-xs font-bold border border-dashed border-black/20 bg-black/5 rounded shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description Points */}
            <ul className="space-y-3">
              {job.description.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-2 mb-1 text-gray-500 items-start"
                >
                  <span className="text-gray-400 shrink-0">•</span>
                  <p className="text-[16px] leading-6">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
