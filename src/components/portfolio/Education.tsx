import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (Artificial Intelligence And Data Science)",
      institution: "Chettinad college of Engineering and Technology, Puliyur",
      period: "2022 - 2026",
      cgpa: "82.0%",
      status: "current"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bharathi Vidhya Mandir Higher secondary School",
      period: "2022",
      cgpa: "70.0%",
      status: "completed"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Bharathi Vidhya Mandir Higher secondary School",
      period: "2020",
      cgpa: "85.0%",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Education & Qualifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey in technology and data science
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-l-4 border-l-primary bg-gradient-to-r from-card to-secondary/20 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{edu.period}</span>
                  {edu.status === "current" && (
                    <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                      Current
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 justify-end">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">{edu.cgpa}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;