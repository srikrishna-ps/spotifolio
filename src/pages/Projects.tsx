import { useState } from "react";
import { Play, Clock, Search } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Placeholder data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      github: "https://github.com/username/project1",
      demo: "https://project-demo.com"
    },
    {
      id: 2,
      title: "Weather Application",
      description: "Real-time weather forecasting with location services",
      image: "/placeholder.svg",
      technologies: ["React", "APIs", "TailwindCSS"],
      year: "2023",
      github: "https://github.com/username/project2",
      demo: "https://project-demo.com"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Productivity tool for team collaboration",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      year: "2023",
      github: "https://github.com/username/project3",
      demo: "https://project-demo.com"
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "Budget planning and expense tracking application",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Firebase", "Chart.js"],
      year: "2022",
      github: "https://github.com/username/project4",
      demo: "https://project-demo.com"
    },
    {
      id: 5,
      title: "Movie Recommendation App",
      description: "Film discovery platform with personalized suggestions",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "TMDb API"],
      year: "2022",
      github: "https://github.com/username/project5",
      demo: "https://project-demo.com"
    },
    {
      id: 6,
      title: "Fitness Tracking Platform",
      description: "Workout planning and progress monitoring application",
      image: "/placeholder.svg",
      technologies: ["React Native", "Express", "MongoDB"],
      year: "2021",
      github: "https://github.com/username/project6",
      demo: "https://project-demo.com"
    },
  ];

  const categories = ["All", "Frontend", "Full-Stack", "Mobile", "API"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => {
    // Search filter
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter (simple implementation)
    const matchesCategory = activeCategory === "All" ||
      (activeCategory === "Frontend" && project.technologies.some(tech => ["React", "Vue.js", "TailwindCSS"].includes(tech))) ||
      (activeCategory === "Full-Stack" && project.technologies.some(tech => ["Node.js", "Express"].includes(tech))) ||
      (activeCategory === "Mobile" && project.technologies.includes("React Native")) ||
      (activeCategory === "API" && project.technologies.some(tech => tech.includes("API")));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="text-white animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="flex items-center bg-spotify-darkgray rounded-full px-4 py-2 w-80">
          <Search className="text-spotify-lightgray mr-2 h-5 w-5" />
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent text-white outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category
                  ? "bg-spotify-green text-white"
                  : "bg-spotify-darkgray text-spotify-lightgray hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="spotify-card group">
              <div className="relative mb-4 overflow-hidden rounded bg-spotify-black/40 aspect-square">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-spotify-green rounded-full p-3 hover:scale-105 transition-transform shadow-lg inline-block"
                  >
                    <Play className="h-5 w-5 fill-current" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-spotify-darkgray rounded-full p-3 hover:scale-105 transition-transform shadow-lg inline-block text-white border border-white/20 hover:border-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
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
      ) : (
        <div className="text-center py-20 text-spotify-lightgray">
          <p className="text-xl">No projects found matching your search</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-4 text-spotify-green hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
