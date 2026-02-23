import Image from "next/image";
import logo from "../../public/images/logo.webp";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export function Intro() {
  return (
    <div className="container mx-auto max-w-3xl md:px-4 pt-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="">
          <Image
            src={logo}
            alt="image"
            width={100}
            height={100}
            className="rounded-full bg-blue-300 dark:bg-yellow-400"
          />
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Hi, I'm Suraj —{" "}
            <span className="text-gray-500 dark:text-neutral-400">
              A Frontend Developer.
            </span>
          </h1>
        </div>

        <div className="mt-4 items-center space-x-1 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-10">
          <span className="whitespace-pre-wrap">
            I build high-performance web apps using{" "}
          </span>
          <a
            target="_blank"
            className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
            href="https://www.typescriptlang.org/"
          >
            <div className="size-4 shrink-0">
              <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </div>
            <p className="ml-1 text-sm font-bold">Typescript</p>
          </a>
          <span className="whitespace-pre-wrap">, </span>
          <a
            target="_blank"
            className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
            href="https://react.dev/"
          >
            <div className="size-4 shrink-0">
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
            </div>
            <p className="ml-1 text-sm font-bold">React</p>
          </a>
          <span className="whitespace-pre-wrap">, </span>
          <a
            target="_blank"
            className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
            href="https://nextjs.org/"
          >
            <div className="size-4 shrink-0">
              <svg viewBox="0 0 128 128">
                <circle cx="64" cy="64" r="64"></circle>
                <path
                  fill="url(#a)"
                  d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                ></path>
                <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
                <defs>
                  <linearGradient
                    id="a"
                    x1="109"
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="121"
                    x2="120.799"
                    y1="54"
                    y2="106.875"
                    gradientTransform="scale(.71111)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="ml-1 text-sm font-bold">Next.js</p>
          </a>
          <span className="whitespace-pre-wrap">, </span>
          
            {/* Tailwind CSS Badge */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
            >
              <div className="size-4 shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                    fill="#38bdf8"
                  />
                </svg>
              </div>
              <span className="ml-1 font-bold">Tailwind CSS</span>
            </a>
          
          <span className="whitespace-pre-wrap">and </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm bg-black/5 dark:bg-white/5 border border-dashed border-black/20 dark:border-white/20 py-1 px-2 rounded-md skill-inner-shadow self-end text-black dark:text-white"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            <div className="size-4 shrink-0">
              <svg viewBox="0 0 630 630" xmlns="http://www.w3.org/2000/svg">
                <rect width="630" height="630" fill="#f7df1e" />

                <g fill="#000">
                  <path d="m195.07 525.6c21.2 0 35.5-11.8 35.5-35.1v-195.8h46.1v196.3c0 51.3-30.9 80.4-82.1 80.4-38.1 0-70.7-17.4-83.4-48.7l44-25.8c6.8 15.3 18.2 28.7 40 28.7z" />

                  <path d="m383.2 488.7c12.7 20.7 29.2 36 58.4 36 24.5 0 40.2-12.3 40.2-29.2 0-20.3-16.1-27.4-43.1-39.3l-14.8-6.3c-42.7-18.2-71.1-41-71.1-89.2 0-44.4 33.8-78.3 86.7-78.3 31.3 0 56.7 11 74.8 42.7l-46.1 28.8c-10.6-18.2-22.8-25-33-25-14.8 0-23.7 9.3-23.7 20.7 0 16.1 9.3 22.4 33 33l14.8 6.3c50.3 21.6 81.3 43.1 81.3 95.2 0 60.5-46.1 89.7-98.6 89.7-52.9 0-82.9-25-97.7-61.7z" />
                </g>
              </svg>
            </div>
            <p className="ml-1 text-sm font-bold">Javascript</p>
          </a>
          <span className="whitespace-pre-wrap">. </span>
          <span className="whitespace-pre-wrap">
            I specialize in creating seamless user</span>
          <span className="whitespace-pre-wrap"> experiences driven by a keen eye for detail.</span>
 
        </div>
      </div>

      <div
        className="mt-8 flex gap-4 container mx-auto max-w-3xl px-4"
        style={{ opacity: 1, transform: "none" }}
      >
        <Link className="hover:cursor-pointer" href="/resume">
          <button
            data-slot="button"
            className="dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] border bg-background btn-inner-shadow hover:bg-accent hover:text-accent-foreground border-input  h-9 px-4 py-2 has-[&gt;svg]:px-3 inset-shadow-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>
            </svg>
            Resume / CV
          </button>
        </Link>
        <Link className="hover:cursor-pointer" href="/contact">
          <button
            data-slot="button"
            className="dark:bg-white dark:text-black dark:hover:bg-neutral-200 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] bg-black text-white btn-inner-shadow hover:bg-neutral-800 hover:cursor-pointer h-9 px-4 py-2 has-[>svg]:px-3 inset-shadow-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
            </svg>
            Get in touch
          </button>
        </Link>
      </div>

      <div
        className="mt-8 flex gap-2 container mx-auto max-w-3xl px-4"
        style={{ opacity: 1, transform: "none" }}
      >
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors text-black dark:text-white"
                href="https://x.com/surajkumarsatya"
              >
                <span className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow on X</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors text-black dark:text-white"
                href="https://www.linkedin.com/in/surajkumarsatya/"
              >
                <span className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Connect on LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors text-black dark:text-white"
                href="https://github.com/surajkumarsatya"
              >
                <span className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                  </svg>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>View GitHub Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors text-black dark:text-white"
                href="mailto:surajmail.799@gmail.com"
              >
                <span className="size-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send an email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
