import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Development",
      issuer: "IBM",
      year: "2024",
      description: "Comprehensive certification covering both frontend and backend development technologies.",
      skills: ["React", "Node.js", "Database Design", "API Development"],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Getting Started with AI",
      issuer: "IBM",
      year: "2024",
      description: "Foundational knowledge in artificial intelligence concepts and applications.",
      skills: ["Machine Learning", "AI Ethics", "Data Analysis", "Python"],
      color: "from-green-600 to-emerald-700"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Great Learning Academy",
      year: "2024",
      description: "Advanced techniques for effective AI prompt design and optimization.",
      skills: ["AI Prompting", "ChatGPT", "NLP", "AI Communication"],
      color: "from-purple-600 to-violet-700"
    },
    {
      title: "Java (upto Intermediate Module)",
      issuer: "Guvi Geek Online Classes",
      year: "2024",
      description: "Intermediate-level Java programming including OOP concepts and data structures.",
      skills: ["Java", "OOP", "Data Structures", "Problem Solving"],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Certification Header */}
                <div className={`h-24 bg-gradient-to-r ${cert.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">{cert.issuer}</span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-white/90 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                </div>

                {/* Certification Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 flex-1">
                      {cert.title}
                    </h3>
                    <a href="https://github.com/Sabivarman03" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 cursor-pointer flex-shrink-0" />
                    </a>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Gained */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-secondary/50 to-accent/20 border-2 border-primary/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">2024</div>
                <div className="text-muted-foreground">Latest Achievement</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-muted-foreground">Leading Platforms</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Completion Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;