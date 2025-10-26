import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Technologies",
      icon: Code,
      skills: ["HTML5", "CSS3", "Web Designing", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programming",
      icon: Brain,
      skills: ["Python Programming", "Data Structures", "Algorithms", "Problem Solving"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Analytics",
      icon: Database,
      skills: ["SQL", "Data Analysis", "Machine Learning", "AI Concepts"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git", "GitHub", "Visual Studio Code", "Development Tools"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${category.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-secondary/50 to-accent/20 border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Development</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Frontend Development</li>
                  <li>• Responsive Web Design</li>
                  <li>• User Interface Design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Data Science</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Data Analysis & Visualization</li>
                  <li>• Machine Learning Basics</li>
                  <li>• Statistical Analysis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Soft Skills</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Team Collaboration</li>
                  <li>• Problem Solving</li>
                  <li>• Continuous Learning</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;