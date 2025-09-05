import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cpu, Award } from "lucide-react";

const About = () => {
  const technologies = [
    "Natural Language Processing", "Machine Learning", "Sentiment Analysis",
    "React", "TypeScript", "Tailwind CSS", "Python", "TensorFlow"
  ];

  const team = [
    { name: "Dr. Sarah Chen", role: "AI Research Lead", expertise: "NLP & Deep Learning" },
    { name: "Mike Rodriguez", role: "Full-Stack Developer", expertise: "React & Node.js" },
    { name: "Emma Johnson", role: "Data Scientist", expertise: "ML & Analytics" },
    { name: "David Kim", role: "UX Designer", expertise: "User Experience" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          About CineScope
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Revolutionizing movie discovery through advanced AI sentiment analysis 
          of the IMDB 50,000 movie review dataset.
        </p>
      </div>

      {/* Mission */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span>Our Mission</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            CineScope leverages cutting-edge artificial intelligence to analyze the emotional 
            undertones of movie reviews, helping viewers discover films that match their current 
            mood and preferences. By processing thousands of reviews, we provide insights that 
            go beyond simple ratings.
          </p>
          <p className="text-muted-foreground">
            Our platform democratizes access to sophisticated sentiment analysis, making it 
            easy for movie enthusiasts to find their next favorite film through the lens of 
            community sentiment and emotional intelligence.
          </p>
        </CardContent>
      </Card>

      {/* Technology */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span>Technology Stack</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="justify-center py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dataset */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-6 w-6 text-primary" />
            <span>IMDB Dataset</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Our analysis is powered by the comprehensive IMDB 50,000 movie review dataset from 
            Kaggle, containing diverse opinions and emotional expressions from movie enthusiasts 
            worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">50,000</div>
              <div className="text-sm text-muted-foreground">Reviews Analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">25,000</div>
              <div className="text-sm text-muted-foreground">Positive Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">25,000</div>
              <div className="text-sm text-muted-foreground">Negative Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">96%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-primary" />
            <span>Our Team</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="gradient-card border border-border/50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;