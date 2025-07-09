import { Briefcase, Code, User } from "lucide-react";
import bitlogo from '../assets/bit.jpeg';
import jnvlogo from '../assets/jnv.png';
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
            I'm an aspiring Software Engineer, passionate about building full-stack web applications and writing efficient code. I specialize in the MERN stack and have a solid grasp of Data Structures and Algorithms.

I'm a Specialist in Codeforces with a peak rating of 1446 and have solved 300+ problems on LeetCode. I love tackling algorithmic challenges and continuously improving my problem-solving skills.
            </p>

            

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1-HoNUqeew2Umjrm7mIus_aR8BcWC6X3I/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10"> */}
                  <img src={bitlogo} alt="" style={{height: '30px', width: '30px', borderRadius: '20px', marginTop: '10px'}}/>
                {/* </div> */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Birla Institute of Technology, Ranchi</h4>
                  <p className="text-muted-foreground">
                    Bachelors of Technology
                    <br />
                    CGPA: 8.00
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div> */}
                <img src={jnvlogo} alt="" style={{height: '30px', width: '30px', borderRadius: '20px', marginTop: '10px'}}/>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Navodaya Vidyalaya Samiti</h4>
                  <p className="text-muted-foreground">
                    AISSCE (+2) PCM + Computer Science
                    <br />
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
