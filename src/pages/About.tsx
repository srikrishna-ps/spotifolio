import { useState } from "react";
import { Calendar, MapPin, Mail, ExternalLink, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const orgLogos = {
  "IEEE HQ": "/org-ieee-hq.png",
  "BMSCE IEEE Student Branch": "/org-bmsce-ieee.png",
};

const FOLLOW_LINK = "https://www.linkedin.com/in/srikrishnap/";
const EXTERNAL_LINK = "https://www.ieee.org/";

const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "HTML", "CSS", "MySQL"] },
    { category: "Technologies", items: ["Kotlin", "ReactJS", "Firebase", "MongoDB"] },
    { category: "Concepts", items: ["Web Development", "Data Structures", "Machine Learning", "Data Visualization", "Operating Systems", "DBMS"] }
  ];

  const leadership = [
    {
      year: "2024",
      title: "IEEE Day 2024 Ambassador",
      org: "IEEE HQ",
      duration: "Sep 2024 – Nov 2024",
      desc: "Ideated and promoted initiatives across online platforms, networked with international members, and organized IEEE Week 2024 at BMSCE, garnering 1000+ participants across 10+ technical and non-technical events."
    },
    {
      year: "2024",
      title: "Joint Secretary",
      org: "BMSCE IEEE Student Branch",
      duration: "Jan 2024 – Dec 2024",
      desc: "Managed administrative tasks, including documentation and reporting on vTools, and executed Ascension: A National 36-hour Data Science Contest in collaboration with Altair, garnering 500+ registrations."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="text-white animate-fade-in font-inter w-full flex flex-col items-center">
      {/* Banner/Header Section */}
      <div className="relative w-full max-w-6xl h-80 md:h-[28rem] flex items-end rounded-b-3xl overflow-hidden mb-10">
        {/* Banner image */}
        <img src="/banner-about.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover z-0" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col gap-2 px-10 pb-10 w-full">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-spotify-green h-6 w-6" />
            <span className="text-base text-spotify-green font-semibold">Verified Leader</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Srikrishna Pejathaya P S</h1>
          <div className="text-xl md:text-2xl text-spotify-lightgray font-medium">Computer Science Undergraduate</div>
          <div className="flex items-center gap-4 text-spotify-lightgray text-base md:text-lg">
            <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Bengaluru, Karnataka</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href={FOLLOW_LINK} target="_blank" rel="noopener noreferrer">
              <button className="spotify-button text-base md:text-lg py-2 px-8">Follow</button>
            </a>
            <a href={EXTERNAL_LINK} target="_blank" rel="noopener noreferrer">
              <button className="border border-white/20 hover:border-white text-white rounded-full text-base md:text-lg py-2 px-4 flex items-center justify-center">
                <ExternalLink className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Row - match left padding with main content */}
      <div className="flex gap-12 mb-16 w-full max-w-6xl px-10">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">5+</div>
          <div className="text-base md:text-lg text-spotify-lightgray">Projects</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">3+</div>
          <div className="text-base md:text-lg text-spotify-lightgray">Leadership Roles</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold">2+</div>
          <div className="text-base md:text-lg text-spotify-lightgray">Years Experience</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col gap-16 px-4 md:px-0">
        {/* About/Description */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full space-y-4 text-spotify-lightgray text-base md:text-lg">
              <p>
                Hello! I'm Srikrishna, an undergraduate in Computer Science and Engineering at B.M.S College of Engineering, Bengaluru.
              </p>
              <p>
                I'm passionate about building impactful, user-centric digital systems using modern technologies and sound engineering principles. I enjoy applying my knowledge in data structures, machine learning, and backend systems to solve real-world problems.
              </p>
              <p>
                Whether it's designing a full-stack web application or leading large-scale technical events, I bring dedication, structure, and creativity to every project.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg w-48 h-48">
                <img src="/placeholder.svg" alt="About visual" className="object-cover w-full h-full" />
              </div>
              <div className="bg-spotify-green text-black font-bold rounded-full px-4 py-2 mt-4 text-base md:text-lg shadow">#2 in the world</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">Skills</h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-white">Leadership Experience</h2>
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-spotify-green/60 rounded-full" style={{ minHeight: leadership.length * 120 + 'px' }} />
            <div className="flex flex-col gap-12">
              {leadership.map((item, idx) => (
                <div key={item.year} className="relative flex items-start gap-6">
                  {/* Dot */}
                  <div className="absolute left-0 top-8 w-8 flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-spotify-green border-2 border-white shadow" />
                  </div>
                  {/* Card/Label */}
                  <div className="flex-1 ml-12">
                    <div className={
                      `flex items-center justify-between bg-spotify-darkgray rounded-xl shadow-lg px-6 py-5 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl`
                    } onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                      <div className="flex items-center gap-6 min-w-0">
                        <img src={orgLogos[item.org]} alt={item.org} className="w-20 h-20 rounded-lg object-cover bg-spotify-black border-2 border-spotify-green flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-lg md:text-xl font-bold text-white truncate">{item.title}</div>
                          <div className="text-base md:text-lg text-spotify-lightgray font-normal truncate">@ {item.org}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-spotify-lightgray text-base md:text-lg font-medium whitespace-nowrap">{item.duration}</span>
                        {openIdx === idx ? <ChevronUp className="h-6 w-6 text-spotify-green" /> : <ChevronDown className="h-6 w-6 text-spotify-green" />}
                      </div>
                    </div>
                    {openIdx === idx && (
                      <div className="bg-spotify-black/90 rounded-b-xl px-8 py-5 text-spotify-lightgray text-base border-t border-spotify-green animate-fade-in">
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
