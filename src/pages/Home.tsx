
import { Play, Clock, ArrowRight } from "lucide-react";

const Home = () => {
  // Placeholder data
  const recentProjects = [
    { id: 1, title: "E-Commerce Platform", description: "A full-stack e-commerce solution", image: "/placeholder.svg", technologies: ["React", "Node.js", "MongoDB"] },
    { id: 2, title: "Weather App", description: "Real-time weather forecasting", image: "/placeholder.svg", technologies: ["React", "APIs", "TailwindCSS"] },
    { id: 3, title: "Task Management", description: "Productivity tool for team collaboration", image: "/placeholder.svg", technologies: ["Next.js", "Prisma", "PostgreSQL"] },
  ];

  const featuredCertifications = [
    { id: 1, title: "Full-Stack Web Development", issuer: "Udacity", date: "May 2024", image: "/placeholder.svg" },
    { id: 2, title: "React Advanced Patterns", issuer: "Frontend Masters", date: "January 2024", image: "/placeholder.svg" },
  ];

  return (
    <div className="text-white animate-fade-in">
      <section className="mb-12">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-56 h-56 bg-gradient-to-br from-spotify-green to-blue-500 rounded-lg flex items-center justify-center shadow-xl">
            <span className="text-6xl font-bold">D</span>
          </div>
          <div>
            <span className="text-sm text-spotify-lightgray">Developer</span>
            <h1 className="text-7xl font-bold mb-4">John Developer</h1>
            <p className="text-xl text-spotify-lightgray">Full-stack developer focused on building exceptional digital experiences</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="spotify-button flex items-center gap-2">
            <Play className="h-5 w-5 fill-current" /> My Resume
          </button>
          <button className="border border-white/20 hover:border-white text-white rounded-full font-bold py-3 px-8 transition-colors duration-200">
            Contact Me
          </button>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Recent Projects</h2>
          <a href="/projects" className="text-spotify-lightgray hover:text-white flex items-center gap-1 transition-colors duration-200">
            See all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <div key={project.id} className="spotify-card group">
              <div className="relative mb-4 overflow-hidden rounded bg-spotify-black/40 aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-spotify-green rounded-full p-3 hover:scale-105 transition-transform shadow-lg">
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-white mb-1">{project.title}</h3>
              <p className="text-spotify-lightgray text-sm mb-2">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-spotify-black px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Featured Certifications</h2>
          <a href="/certifications" className="text-spotify-lightgray hover:text-white flex items-center gap-1 transition-colors duration-200">
            See all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bg-spotify-darkgray rounded-lg">
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-2 border-b border-spotify-black/40 text-spotify-lightgray text-sm">
            <span className="font-medium">#</span>
            <span className="font-medium">TITLE</span>
            <span className="font-medium flex items-center">
              <Clock className="h-4 w-4" />
            </span>
          </div>
          
          {featuredCertifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-3 hover:bg-white/5 transition-colors duration-200 rounded-md items-center"
            >
              <span className="text-spotify-lightgray">{index + 1}</span>
              <div className="flex items-center gap-3">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-10 h-10 rounded"
                />
                <div>
                  <h3 className="font-medium text-white">{cert.title}</h3>
                  <p className="text-sm text-spotify-lightgray">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-spotify-lightgray text-sm">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
