import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in block mb-2"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-glow">
              Sayan
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-2 block mt-4">
              Software Engineer & Problem Solver
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I'm an aspiring Software Engineer passionate about building scalable web applications. Skilled in the MERN stack and Data Structures & Algorithms, I enjoy solving real-world problems through clean and efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button group">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold">
              Get In Touch
            </a>
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
