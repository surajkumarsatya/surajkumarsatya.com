import ContactForm from "@/components/ContactForm";

export default function Contact(){
    return(
        <section className="container mx-auto max-w-3xl py-16">
            <div className="space-y-8">
                <div className="space-y-4 text-center" style={{ opacity: 1, transform: "none" }}>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Contact</h1>
                    <p className="mx-auto max-w-2xl px-4 md:px-0 text-lg text-muted-foreground">Get in touch with me. I will get back to you as soon as possible.</p>
                </div>

                <div style={{ opacity: 1, transform: "none" }}><div data-orientation="horizontal" role="none" data-slot="separator" className="w-[90%] mx-auto bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal] data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"></div></div>
                
                <ContactForm />
            </div>
        </section>
    ) 
}