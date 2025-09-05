import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MovieSearch from "@/components/MovieSearch";
import MovieBuddy from "@/components/MovieBuddy";
import { Film, BarChart3, Users, Zap } from "lucide-react";
import heroCinema from "@/assets/hero-cinema.jpg";

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Advanced AI analysis of movie reviews to understand viewer emotions and reactions"
    },
    {
      icon: Film,
      title: "Smart Recommendations",
      description: "Get personalized movie suggestions based on your mood and preferences"
    },
    {
      icon: Users,
      title: "Community Insights",
      description: "Discover what the community thinks about movies with detailed sentiment breakdowns"
    },
    {
      icon: Zap,
      title: "Real-time Analysis",
      description: "Instant sentiment analysis powered by machine learning algorithms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroCinema})` }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Welcome to CineScope
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the emotional journey of movies through AI-powered sentiment analysis. 
            Find your next favorite film based on mood, genre, and community insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Analyzing
            </Button>
            <Button variant="cinema" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose CineScope?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="gradient-card shadow-elegant hover:shadow-accent transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Search Interface */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <MovieSearch />
        </div>
      </section>

      {/* Movie Buddy */}
      <MovieBuddy />
    </div>
  );
};

export default Home;