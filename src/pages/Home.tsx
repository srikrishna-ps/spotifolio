
import { useState, useEffect } from "react";
import { Play, Clock, ArrowRight, Pause, Heart, HeartOff, Music } from "lucide-react";

const Home = () => {
  // State for animations and interactive elements
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [greeting, setGreeting] = useState("");

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // Placeholder data
  const recentProjects = [
    { id: 1, title: "E-Commerce Platform", description: "A full-stack e-commerce solution", image: "/placeholder.svg", technologies: ["React", "Node.js", "MongoDB"] },
    { id: 2, title: "Weather App", description: "Real-time weather forecasting", image: "/placeholder.svg", technologies: ["React", "APIs", "TailwindCSS"] },
    { id: 3, title: "Task Management", description: "Productivity tool for team collaboration", image: "/placeholder.svg", technologies: ["Next.js", "Prisma", "PostgreSQL"] },
    { id: 4, title: "Portfolio Website", description: "Spotify-inspired developer showcase", image: "/placeholder.svg", technologies: ["React", "TailwindCSS", "Vite"] },
  ];

  const featuredCertifications = [
    { id: 1, title: "Full-Stack Web Development", issuer: "Udacity", date: "May 2024", image: "/placeholder.svg" },
    { id: 2, title: "React Advanced Patterns", issuer: "Frontend Masters", date: "January 2024", image: "/placeholder.svg" },
  ];

  // Categories for exploration section
  const categories = [
    { id: 1, name: "Frontend", color: "from-purple-500 to-blue-500", image: "/placeholder.svg" },
    { id: 2, name: "Backend", color: "from-red-500 to-orange-500", image: "/placeholder.svg" },
    { id: 3, name: "DevOps", color: "from-green-500 to-teal-500", image: "/placeholder.svg" },
    { id: 4, name: "Mobile", color: "from-yellow-500 to-amber-500", image: "/placeholder.svg" },
  ];

  const togglePlay = (projectId: number) => {
    setIsPlaying(prev => !prev);
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const toggleFavorite = (projectId: number) => {
    setFavorites(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="text-white pb-12">
      {/* Hero section with greeting */}
      <section className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">{greeting}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="category-card animate-fade-in h-24"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-full h-full bg-gradient-to-r ${category.color} flex items-center p-4 rounded-lg`}>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 animate-fade-in delay-200">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-56 h-56 bg-gradient-to-br from-spotify-green to-blue-500 rounded-lg flex items-center justify-center shadow-xl animate-pulse-slow">
            <span className="text-6xl font-bold">D</span>
          </div>
          <div>
            <span className="text-sm text-spotify-lightgray">Developer</span>
            <h1 className="text-7xl font-bold mb-4">John Developer</h1>
            <p className="text-xl text-spotify-lightgray">Full-stack developer focused on building exceptional digital experiences</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button 
            className="spotify-button flex items-center gap-2 card-hover-effect"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <>
                <Pause className="h-5 w-5" /> Pause Resume
              </>
            ) : (
              <>
                <Play className="h-5 w-5 fill-current" /> Play Resume
              </>
            )}
          </button>
          <button className="border border-white/20 hover:border-white text-white rounded-full font-bold py-3 px-8 transition-all duration-200 card-hover-effect">
            Contact Me
          </button>
        </div>
      </section>

      <section className="mb-12 animate-fade-in delay-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title flex items-center gap-2">
            <Music className="h-6 w-6 text-spotify-green" /> 
            Recent Projects
          </h2>
          <a href="/projects" className="text-spotify-lightgray hover:text-white flex items-center gap-1 transition-colors duration-200 card-hover-effect">
            See all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="playlist-card animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="playlist-card-img">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="play-button-overlay">
                <button 
                  className="bg-spotify-green rounded-full p-3 hover:scale-105 transition-transform shadow-lg"
                  onClick={() => togglePlay(project.id)}
                  aria-label={isPlaying && activeProject === project.id ? "Pause project" : "Play project"}
                >
                  {isPlaying && activeProject === project.id ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5 fill-current" />
                  )}
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="playlist-card-title">{project.title}</h3>
                  <p className="playlist-card-subtitle">{project.description}</p>
                </div>
                <button 
                  onClick={() => toggleFavorite(project.id)} 
                  className="text-spotify-lightgray hover:text-spotify-green transition-colors"
                  aria-label={favorites[project.id] ? "Remove from favorites" : "Add to favorites"}
                >
                  {favorites[project.id] ? (
                    <Heart className="h-5 w-5 fill-spotify-green text-spotify-green" />
                  ) : (
                    <Heart className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-spotify-black px-2 py-1 rounded transition-all hover:bg-opacity-80 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in delay-400">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title flex items-center gap-2">
            <Award className="h-6 w-6 text-spotify-green" /> 
            Featured Certifications
          </h2>
          <a href="/certifications" className="text-spotify-lightgray hover:text-white flex items-center gap-1 transition-colors duration-200 card-hover-effect">
            See all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="bg-spotify-darkgray rounded-lg card-hover-effect">
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
              className="grid grid-cols-[auto_1fr_auto] gap-4 px-6 py-3 hover:bg-white/5 transition-all duration-200 rounded-md items-center animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
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
