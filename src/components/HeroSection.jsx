import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-background to-primary/5 section-divider"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="space-y-10">
          <div className="flex justify-center">
            <span className="section-eyebrow opacity-0 animate-fade-in">Hi, I'm</span>
          </div>
          <h1 className="tracking-tight font-extrabold">
            <span className="block text-5xl md:text-7xl lg:text-8xl heading-gradient opacity-0 animate-fade-in-delay-1">
              Sayan Manna
            </span>
            <span className="block mt-4 text-xl md:text-2xl lg:text-3xl text-muted-foreground font-semibold opacity-0 animate-fade-in-delay-2">
              Full Stack Developer | Devops Enthusiast
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I'm an aspiring Software Engineer passionate about building scalable web applications. Skilled in the MERN stack and Data Structures & Algorithms, I enjoy solving real-world problems through clean and efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 font-medium"> Scroll Down </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
