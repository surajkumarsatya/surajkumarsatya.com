"use client";

import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send");

    alert("Message sent successfully!");
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
}


  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col gap-6 bg-transparent py-0">
        {/* Header */}
        <div className="grid gap-1.5 px-6">
          <h2 className="text-lg font-semibold leading-none">
            Send me a message
          </h2>
          <p className="text-sm text-muted-foreground">
            Fill out the form below and I will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className="px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">
                  Phone *
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="+1 (123) xxx-xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <label className="text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <div className="grid gap-2">
              <label className="text-sm font-medium">
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248a15.88,15.88,0,0,0,14-11.51l58.2-191.94A16,16,0,0,0,227.32,28.68Z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
