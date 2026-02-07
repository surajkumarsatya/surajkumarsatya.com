import Image from "next/image";
import logo from "../../public/images/logo.png"

export function Navbar(){
    return(
        <nav className="container mx-auto max-w-3xl px-4 sticky top-0 z-50 rounded-md py-4 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6">
                <div className="flex items-end gap-4">
                    <a href="">
                        <Image src={logo} alt="logo" width={48} className="rounded-md bg-blue-300"/>
                    </a>
                
                    <div className="flex items-baseline justify-center gap-4">
                        <a className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/work-experience">Work</a>
                        <a className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/blog">Blogs</a>
                        <a className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4" href="/projects">Projects</a>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [@media(hover:hover)_and_(pointer:fine)]:transition-colors [@media(hover:hover)_and_(pointer:fine)]:duration-200 [@media(hover:hover)_and_(pointer:fine)]:ease-[ease] btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-10 cursor-pointer p-0 transition-all duration-300 active:scale-95 rounded-md" type="button" aria-label="Toggle theme"><span className="sr-only">Toggle theme</span><svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path></svg></button>
                </div>
            </div>
        </nav>
    )
}