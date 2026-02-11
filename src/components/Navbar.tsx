"use client";

import Image from "next/image";
import logo from "../../public/images/logo.webp"
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar(){
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return(
        <nav className="container mx-auto max-w-3xl px-4 sticky top-0 z-50 rounded-md py-4 backdrop-blur-sm">
            <div className="flex items-center justify-between md:px-4">
                <div className="flex items-end gap-4">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={48} className="rounded-md bg-blue-300 dark:bg-yellow-400"/>
                    </Link>
                </div>
                <div>
                    <div className="flex items-baseline justify-center gap-4">
                        <Link className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/work-experience">Work</Link>
                        <Link className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/projects">Projects</Link>
                        <Link className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button 
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        data-slot="button" 
                        className="inline-flex items-center justify-center gap-2  bg-gray-200 dark:bg-neutral-900 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-10 cursor-pointer p-0 transition-all duration-300 active:scale-95 rounded-md" 
                        type="button" 
                        aria-label="Toggle theme"
                    >
                        <span className="sr-only">Toggle theme</span>
                        {/* If theme is dark, show a sun icon, otherwise show your moon icon */}
                        {theme === "dark" ? (
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg>
                        ) : (
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path></svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}