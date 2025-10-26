import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/5 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="text-center lg:text-left space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Sabi Varman
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mt-2 animate-delayed-fade-in">
                AI & Data Science Student
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl animate-delayed-fade-in-2">
              I enjoy working with people and believe that good teamwork often brings out the best ideas. 
              While I'm confident working independently, I find that collaboration adds a layer of creativity 
              and growth to every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-delayed-fade-in-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/Sabi_Varman_Resume.docx" download="Sabi_Varman_Resume.docx">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <Card className="p-8 max-w-md w-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card to-secondary/30">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4 animate-pulse-glow">
                    SV
                  </div>
                  <h3 className="text-xl font-semibold">Get In Touch</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:sabivarman1@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sabivarman1@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href="tel:+919600895752" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9600895752
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">
                      Kadamalaikundu, Theni, Tamil Nadu
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;