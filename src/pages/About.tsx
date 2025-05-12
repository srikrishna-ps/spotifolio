import { Calendar, MapPin, Mail, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const orgLogos = {
  "Tech Company": "/org-tech-company.svg",
  "Startup X": "/org-startup-x.svg",
  "Open Source": "/org-open-source.svg",
  "University Hackathon": "/org-hackathon.svg",
};

const About = () => {
  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "Vue", "HTML/CSS", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"] },
    { category: "DevOps", items: ["Git", "Docker", "CI/CD", "AWS", "Heroku"] },
    { category: "Design", items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"] }
  ];

  const leadership = [
    { year: "2024", title: "Tech Lead", org: "Tech Company", duration: "Jan 2024 - Present", desc: "Led a team of 8 developers to deliver a major product overhaul." },
    { year: "2023", title: "Project Lead", org: "Startup X", duration: "Feb 2023 - Dec 2023", desc: "Managed a cross-functional team for a high-impact startup launch." },
    { year: "2022", title: "Mentor", org: "Open Source", duration: "2022", desc: "Guided junior devs in open source contributions and best practices." },
    { year: "2021", title: "Team Captain", org: "University Hackathon", duration: "2021", desc: "Coordinated a winning team in a national hackathon." },
  ];

  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="text-white animate-fade-in font-inter">
      {/* Banner/Header Section */}
      <div className="relative w-full h-72 md:h-96 bg-gradient-to-br from-[#b92b2b] to-spotify-black rounded-b-3xl overflow-hidden flex items-end">
        {/* Banner image (optional) */}
        {/* <img src="/banner.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-60" /> */}
        {/* Profile image, overlapping banner */}
        <div className="absolute left-12 md:left-20 bottom-0 translate-y-1/2 z-20">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-spotify-black shadow-2xl bg-spotify-darkgray">
            <img src="/placeholder.svg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Name, verified, role, stats, buttons */}
        <div className="flex flex-col gap-2 md:gap-3 pb-10 pl-48 md:pl-72 z-10">
          <div className="flex items-center gap-2 mt-8 md:mt-0">
            <CheckCircle className="text-spotify-green h-5 w-5" />
            <span className="text-base text-spotify-green font-semibold">Verified Leader</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">John Developer</h1>
          <div className="text-base md:text-lg text-spotify-lightgray font-medium">Full-Stack Developer</div>
          <div className="flex items-center gap-4 text-spotify-lightgray text-sm md:text-base">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New York, NY</span>
          </div>
          <div className="flex gap-4 mt-2">
            <button className="spotify-button text-base py-2 px-8">Follow</button>
            <button className="border border-white/20 hover:border-white text-white rounded-full text-base py-2 px-4 flex items-center justify-center">
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-white text-base md:text-lg font-bold">32,000+ monthly collaborators</div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-10 md:gap-16 mt-20 mb-10 pl-12 md:pl-20">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">20+</div>
          <div className="text-xs md:text-sm text-spotify-lightgray">Projects</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">10+</div>
          <div className="text-xs md:text-sm text-spotify-lightgray">Clients</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">5+</div>
          <div className="text-xs md:text-sm text-spotify-lightgray">Years</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
        {/* About/Description */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-2/3 space-y-4 text-spotify-lightgray text-base md:text-lg">
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
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full">
                <img src="/placeholder.svg" alt="About visual" className="object-cover w-full h-48" />
              </div>
              <div className="bg-spotify-green text-black font-bold rounded-full px-4 py-2 mt-4 text-base md:text-lg shadow">#147 in the world</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="spotify-card">
                <h3 className="text-base md:text-lg font-medium mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-spotify-black text-spotify-lightgray px-4 py-1 rounded-full text-sm md:text-base font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience Tree */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-white">Leadership Experience</h2>
          <div className="relative pl-6 md:pl-10">
            {/* Vertical line */}
            <div className="absolute left-2 md:left-4 top-0 bottom-0 w-1 bg-spotify-green/40 rounded-full" style={{ minHeight: leadership.length * 110 + 'px' }} />
            <div className="flex flex-col gap-10">
              {leadership.map((item, idx) => (
                <div key={item.year} className="relative flex items-start gap-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-6 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-spotify-green border-2 border-white shadow" />
                  </div>
                  {/* Card/Label */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center bg-spotify-darkgray rounded-xl shadow-lg px-6 py-4">
                    <div className="flex items-center gap-4 flex-1">
                      <img src={orgLogos[item.org] || "/placeholder.svg"} alt={item.org} className="w-10 h-10 rounded-full object-cover border border-spotify-green bg-spotify-black" />
                      <div>
                        <span className="text-white font-semibold text-base md:text-lg">{item.title}</span>
                        <span className="text-spotify-lightgray text-base ml-2">@ {item.org}</span>
                      </div>
                    </div>
                    <div className="ml-auto text-spotify-green font-medium text-sm md:text-base whitespace-nowrap">{item.duration}</div>
                  </div>
                  {/* Collapsible details */}
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-spotify-green focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    aria-label="Toggle details"
                  >
                    {openIdx === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openIdx === idx && (
                    <div className="absolute left-16 right-0 mt-2 bg-spotify-black/80 rounded-lg shadow p-4 text-spotify-lightgray text-sm md:text-base z-30">
                      {item.desc}
                    </div>
                  )}
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
