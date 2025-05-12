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
    <div className="text-white animate-fade-in font-inter">
      {/* Hero/Banner Section */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-spotify-green/60 to-spotify-black flex items-end">
        {/* Banner background image (optional) */}
        {/* <img src="/banner.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-30" /> */}
        {/* Profile image, overlapping banner */}
        <div className="absolute left-8 bottom-0 transform translate-y-1/2">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-spotify-black shadow-xl bg-spotify-darkgray">
            <img src="/placeholder.svg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Name, role, location, buttons */}
        <div className="ml-60 pb-8 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">John Developer</h1>
          <div className="flex items-center gap-4 text-spotify-lightgray text-lg">
            <span>Full-Stack Developer</span>
            <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> New York, NY</span>
          </div>
          <div className="flex gap-4 mt-2">
            <button className="spotify-button text-base py-2 px-8">Follow</button>
            <button className="border border-white/20 hover:border-white text-white rounded-full text-base py-2 px-4 flex items-center justify-center">
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-12 mt-28 mb-12 ml-60">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">20+</div>
          <div className="text-sm text-spotify-lightgray">Projects</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">10+</div>
          <div className="text-sm text-spotify-lightgray">Clients</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">5+</div>
          <div className="text-sm text-spotify-lightgray">Years</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-60 max-w-4xl">
        {/* About/Description */}
        <div className="mb-10">
          <h2 className="section-title">About</h2>
          <div className="space-y-4 text-spotify-lightgray text-lg">
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

        {/* Skills */}
        <div className="mb-10">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="spotify-card">
                <h3 className="text-lg font-medium mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-spotify-black text-spotify-lightgray px-4 py-1 rounded-full text-base font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-10">
          <h2 className="section-title">Career Timeline</h2>
          <div className="spotify-card">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="w-20 text-spotify-green font-medium text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-spotify-green rounded-full mr-4"></div>
                      <div className="text-spotify-lightgray text-base">{milestone.event}</div>
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
  );
};

export default About;
