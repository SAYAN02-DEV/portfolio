import { Briefcase, Code, User } from "lucide-react";
import bitlogo from '../assets/bit.jpeg';
import jnvlogo from '../assets/jnv.png';
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Get to know more about my journey, skills, and passion for technology
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Web Developer & Problem Solver
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an aspiring Software Engineer, passionate about building full-stack web applications and writing efficient code. I specialize in the MERN stack and have a solid grasp of Data Structures and Algorithms.
                </p>
                <p>
                  I'm a Specialist in Codeforces with a peak rating of 1446 and have solved 300+ problems on LeetCode. I love tackling algorithmic challenges and continuously improving my problem-solving skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1-HoNUqeew2Umjrm7mIus_aR8BcWC6X3I/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Education</h3>
            
            <div className="gradient-border p-8 card-hover group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={bitlogo} 
                    alt="BIT Ranchi Logo" 
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                </div>
                <div className="text-left flex-grow">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Birla Institute of Technology, Ranchi
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    Bachelor of Technology
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    CGPA: 8.00
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={jnvlogo} 
                    alt="JNV Logo" 
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                </div>
                <div className="text-left flex-grow">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    Navodaya Vidyalaya Samiti
                  </h4>
                  <p className="text-muted-foreground mb-1">
                    AISSCE (+2) PCM + Computer Science
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Percentage: 88.2%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
