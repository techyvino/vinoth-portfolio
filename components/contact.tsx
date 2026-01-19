"use client";

import { motion } from "framer-motion";
import { Section } from "./section";
import { Mail, Send, MapPin, Phone, Loader2, ArrowRight } from "lucide-react";
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
    <Section
      id="contact"
      className="py-20 relative overflow-hidden bg-zinc-50/10 dark:bg-black/20 noise"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest"
              >
                Connect
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-4xl md:text-7xl font-black tracking-tighter"
              >
                Let&apos;s Build <br />
                <span className="text-gradient">Something Great</span>
              </motion.h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I&apos;m always
                open to new opportunities and interesting conversations.
              </p>
            </div>

            <div className="space-y-4">
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
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-6 p-6 rounded-3xl border border-border glass hover:border-indigo-500/30 transition-all group relative overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="p-4 rounded-2xl bg-indigo-500/5 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 relative z-10"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={24} strokeWidth={2.5} />
                  </motion.div>
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/60 mb-1">
                      {item.label}
                    </div>
                    <div className="text-lg font-black tracking-tight">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, type: "spring" as const }}
            className="p-8 md:p-12 rounded-[3rem] border border-border glass shadow-2xl shadow-indigo-500/5 relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-muted-foreground/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-8 py-5 rounded-2xl bg-background/50 border border-border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-muted-foreground/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-8 py-5 rounded-2xl bg-background/50 border border-border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest ml-1 text-muted-foreground/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-8 py-6 rounded-3xl bg-background/50 border border-border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all resize-none font-medium"
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-2xl shadow-indigo-500/20 disabled:opacity-70 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      Sending <Loader2 className="animate-spin" size={20} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
