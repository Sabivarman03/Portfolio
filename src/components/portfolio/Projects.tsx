import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Flame } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Air Canvas using Python",
      description: "An innovative computer vision project that allows users to draw in the air using hand gestures. Utilizes Python libraries for real-time gesture recognition and virtual drawing.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Gesture Recognition"],
      icon: Globe,
      color: "from-blue-500 to-purple-500",
      category: "AI/ML Project"
    },
    {
      title: "Forest Fire Detection System",
      description: "An AI-powered system that detects forest fires using computer vision and machine learning algorithms. Analyzes satellite imagery and sensor data to identify fire outbreaks early for rapid response.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning", "OpenCV"],
      icon: Flame,
      color: "from-orange-500 to-red-600",
      category: "AI/ML Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my practical applications and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 group-hover:from-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center pt-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com/Sabivarman03" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Project Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-card to-secondary/30 border-2 border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and expanding my portfolio. 
              Stay tuned for more innovative solutions and exciting developments!
            </p>
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;