
import { Calendar, MapPin, Mail, ExternalLink } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "Vue", "HTML/CSS", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"] },
    { category: "DevOps", items: ["Git", "Docker", "CI/CD", "AWS", "Heroku"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"] }
  ];

  const milestones = [
    { year: "2024", event: "Senior Frontend Developer at Tech Company" },
    { year: "2023", event: "Launched personal project with 10k+ users" },
    { year: "2022", event: "Full Stack Developer at Startup X" },
    { year: "2021", event: "Graduated with Computer Science Degree" },
    { year: "2020", event: "First professional web development position" },
    { year: "2019", event: "Started learning web development" }
  ];

  return (
    <div className="text-white animate-fade-in">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <div className="relative mb-6 overflow-hidden rounded-full w-60 h-60 mx-auto">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">John Developer</h1>
                <p className="text-spotify-lightgray mb-4">Full-Stack Developer</p>
                
                <div className="flex flex-col gap-2 text-spotify-lightgray">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>New York, NY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>5+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>john@developer.com</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <button className="spotify-button text-sm py-2 px-6 w-full">
                  Follow
                </button>
                <button className="border border-white/20 hover:border-white text-white rounded-full text-sm py-2 px-4">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-xs text-spotify-lightgray">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-spotify-lightgray">Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs text-spotify-lightgray">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="mb-10">
              <h2 className="section-title">About Me</h2>
              <div className="space-y-4 text-spotify-lightgray">
                <p>
                  Hello! I'm a passionate full-stack developer with over 5 years of experience building web applications and digital experiences. 
                </p>
                <p>
                  I specialize in creating responsive, user-friendly applications using modern technologies and best practices. My approach combines technical expertise with an eye for design, ensuring projects not only function flawlessly but also provide exceptional user experiences.
                </p>
                <p>
                  Throughout my career, I've worked with startups and established companies to bring their ideas to life. I'm constantly learning and experimenting with new technologies to stay at the forefront of web development.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="section-title">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="spotify-card">
                    <h3 className="text-lg font-medium mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill} 
                          className="bg-spotify-black text-spotify-lightgray px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title">Career Timeline</h2>
              <div className="spotify-card">
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="w-16 text-spotify-green font-medium">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-spotify-green rounded-full mr-4"></div>
                          <div className="text-spotify-lightgray">{milestone.event}</div>
                        </div>
                        {index !== milestones.length - 1 && (
                          <div className="w-0.5 h-6 bg-spotify-darkgray ml-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
