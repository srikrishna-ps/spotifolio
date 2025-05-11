
import { useState } from "react";
import { Clock, Search, ArrowDown, ArrowUp } from "lucide-react";

const Certifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  // Placeholder certification data
  const certifications = [
    {
      id: 1,
      title: "Full-Stack Web Development Nanodegree",
      issuer: "Udacity",
      date: "May 2024",
      image: "/placeholder.svg",
      credentialId: "FSND-12345",
      skills: ["React", "Node.js", "MongoDB", "RESTful APIs"]
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "January 2024",
      image: "/placeholder.svg",
      credentialId: "ARM-67890",
      skills: ["React Hooks", "Context API", "Redux", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Node.js Advanced Concepts",
      issuer: "Udemy",
      date: "November 2023",
      image: "/placeholder.svg",
      credentialId: "NAC-24680",
      skills: ["Express", "Authentication", "Microservices", "Caching"]
    },
    {
      id: 4,
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      date: "August 2023",
      image: "/placeholder.svg",
      credentialId: "DSA-13579",
      skills: ["Problem Solving", "Complexity Analysis", "Sorting", "Searching"]
    },
    {
      id: 5,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "May 2023",
      image: "/placeholder.svg",
      credentialId: "ACD-97531",
      skills: ["Lambda", "S3", "DynamoDB", "API Gateway"]
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      issuer: "Interaction Design Foundation",
      date: "February 2023",
      image: "/placeholder.svg",
      credentialId: "UXD-86420",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    }
  ];

  // Filter certifications based on search query
  const filteredCertifications = certifications
    .filter(cert => 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    // Sort by date
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="text-white animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Certifications</h1>
        <div className="flex items-center bg-spotify-darkgray rounded-full px-4 py-2 w-80">
          <Search className="text-spotify-lightgray mr-2 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search certifications..." 
            className="bg-transparent text-white outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-spotify-darkgray rounded-lg overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-6 py-2 border-b border-spotify-black/40 text-spotify-lightgray text-sm">
          <span className="font-medium">#</span>
          <span className="font-medium">TITLE</span>
          <span className="font-medium">ISSUER</span>
          <span 
            className="font-medium flex items-center cursor-pointer"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            DATE {sortOrder === "asc" ? <ArrowUp className="h-4 w-4 ml-1" /> : <ArrowDown className="h-4 w-4 ml-1" />}
          </span>
        </div>
        
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-6 py-4 hover:bg-white/5 transition-colors duration-200 items-center border-b border-spotify-black/20 last:border-0"
            >
              <span className="text-spotify-lightgray">{index + 1}</span>
              <div className="flex items-center gap-3">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h3 className="font-medium text-white">{cert.title}</h3>
                  <p className="text-xs text-spotify-lightgray">ID: {cert.credentialId}</p>
                </div>
              </div>
              <span className="text-spotify-lightgray">{cert.issuer}</span>
              <span className="text-spotify-lightgray text-sm">{cert.date}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-spotify-lightgray">
            <p>No certifications found matching your search</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-2 text-spotify-green hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {filteredCertifications.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertifications.slice(0, 2).map(cert => (
            <div key={cert.id} className="spotify-card">
              <div className="flex gap-4 mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-24 h-24 rounded"
                />
                <div>
                  <h3 className="font-bold text-white">{cert.title}</h3>
                  <p className="text-spotify-lightgray">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm text-spotify-lightgray mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="text-xs bg-spotify-black px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certifications;
