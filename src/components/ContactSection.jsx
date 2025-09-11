import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <a
                    href="mailto:sayan02.official@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    sayan02.official@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg mb-2">Phone</h4>
                  <a
                    href="tel:+917811899383"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    +91 7811899383
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg mb-2">Location</h4>
                  <span className="text-muted-foreground text-lg">
                    Kolkata, West Bengal, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-lg mb-6">Connect With Me</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/sayanmanna/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://x.com/SayanManna24679" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/ss_sayan_10/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:scale-110 transition-all duration-300 border border-primary/20"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-10 rounded-2xl shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-lg"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-3 text-lg py-4",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
