import { useState } from "react";
import { Calendar, MapPin, Mail, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const orgLogos = {
  "Tech Company": "/org-tech-company.png",
  "Startup X": "/org-startup-x.png",
  "Open Source": "/org-open-source.png",
  "University Hackathon": "/org-hackathon.png",
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

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="text-white animate-fade-in font-inter w-full flex flex-col items-center">
      {/* Banner/Header Section */}
      <div className="relative w-full max-w-6xl h-72 md:h-96 bg-gradient-to-br from-[#b92b2b] to-spotify-black flex items-end rounded-b-3xl overflow-hidden mb-10">
        {/* Banner image (optional) */}
        {/* <img src="/banner.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-60" /> */}
        <div className="absolute left-10 bottom-10 z-20 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-spotify-green h-6 w-6" />
            <span className="text-base text-spotify-green font-semibold">Verified Leader</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">John Developer</h1>
          <div className="text-2xl text-spotify-lightgray font-medium">Full-Stack Developer</div>
          <div className="flex items-center gap-4 text-spotify-lightgray text-lg">
            <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> New York, NY</span>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="spotify-button text-lg py-2 px-8">Follow</button>
            <button className="border border-white/20 hover:border-white text-white rounded-full text-lg py-2 px-4 flex items-center justify-center">
              <ExternalLink className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 text-white text-lg font-bold">32,000+ monthly collaborators</div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-12 mb-16 w-full max-w-6xl justify-start">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">20+</div>
          <div className="text-base text-spotify-lightgray">Projects</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">10+</div>
          <div className="text-base text-spotify-lightgray">Clients</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">5+</div>
          <div className="text-base text-spotify-lightgray">Years</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col gap-16">
        {/* About/Description */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6 text-white">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full space-y-4 text-spotify-lightgray text-lg">
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
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full">
                <img src="/placeholder.svg" alt="About visual" className="object-cover w-full h-48" />
              </div>
              <div className="bg-spotify-green text-black font-bold rounded-full px-4 py-2 mt-4 text-lg shadow">#147 in the world</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-extrabold mb-6 text-white">Skills</h2>
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

        {/* Leadership Experience Tree */}
        <div>
          <h2 className="text-3xl font-extrabold mb-10 text-white">Leadership Experience</h2>
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-spotify-green/40 rounded-full" style={{ minHeight: leadership.length * 110 + 'px' }} />
            <div className="flex flex-col gap-10">
              {leadership.map((item, idx) => (
                <div key={item.year} className="relative flex items-start gap-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-6 w-8 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-spotify-green border-2 border-white shadow" />
                  </div>
                  {/* Card/Label */}
                  <div className="flex-1 ml-10">
                    <div className="flex items-center justify-between bg-spotify-darkgray rounded-xl shadow-lg px-6 py-4 cursor-pointer" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                      <div className="flex items-center gap-5">
                        <img src={orgLogos[item.org]} alt={item.org} className="w-16 h-16 rounded-lg object-cover bg-spotify-black border-2 border-spotify-green" />
                        <div>
                          <div className="text-xl font-bold text-white">{item.title} <span className="text-spotify-lightgray font-normal">@ {item.org}</span></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-spotify-lightgray text-lg font-medium">{item.duration}</span>
                        {openIdx === idx ? <ChevronUp className="h-6 w-6 text-spotify-green" /> : <ChevronDown className="h-6 w-6 text-spotify-green" />}
                      </div>
                    </div>
                    {openIdx === idx && (
                      <div className="bg-spotify-black/80 rounded-b-xl px-8 py-4 text-spotify-lightgray text-base border-t border-spotify-green">
                        {item.desc}
                      </div>
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
