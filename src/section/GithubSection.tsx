import Github from "@/components/Github";

export default function GithubSection() {
  return (
    <section className="container mx-auto max-w-3xl px-4 md:px-8 mt-20 mb-16">
        <header className="">
            <p className="text-gray-600 dark:text-gray-300 text-sm" style={{ opacity: 1, transform: "none" }}>
            Featured
            </p>
            <h2 className="text-2xl font-bold" style={{ opacity: 1, transform: "none" }}>
            Github Activity
            </h2>
        </header>

        <Github />
    </section>
  );
}
