"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mwvvorpk", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.error || "Oops! There was a problem submitting your form",
        );
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Let's Connect</h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind? Let's build something amazing together.
                Feel free to reach out via the form or social media.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "techyvino@gmail.com",
                  href: "mailto:techyvino@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Chennai, IN 600129",
                  href: "#",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 91235 79202",
                  href: "tel:+919123579202",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-[2.5rem] border border-border shadow-2xl shadow-indigo-500/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Inquiry about new project"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all disabled:opacity-50"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me a bit about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none disabled:opacity-50"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="animate-spin" size={20} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
