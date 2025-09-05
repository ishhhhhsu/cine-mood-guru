import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SimpleChart } from "@/components/ui/chart-fix";
import { Clock, TrendingUp, BarChart3, Trash2 } from "lucide-react";

const History = () => {
  const recentSearches = [
    {
      movie: "The Dark Knight",
      timestamp: "2024-01-15 14:30",
      sentiment: "Positive",
      score: 0.89,
      genre: "Action"
    },
    {
      movie: "Inception",
      timestamp: "2024-01-15 13:45",
      sentiment: "Positive",
      score: 0.92,
      genre: "Sci-Fi"
    },
    {
      movie: "The Notebook",
      timestamp: "2024-01-15 12:20",
      sentiment: "Mixed",
      score: 0.65,
      genre: "Romance"
    },
    {
      movie: "Horror Movie X",
      timestamp: "2024-01-15 11:15",
      sentiment: "Negative",
      score: 0.25,
      genre: "Horror"
    },
    {
      movie: "Comedy Gold",
      timestamp: "2024-01-15 10:30",
      sentiment: "Positive",
      score: 0.88,
      genre: "Comedy"
    }
  ];

  const sentimentData = [
    { name: "Happy", value: 5, color: "#22c55e" },
    { name: "Action", value: 3, color: "#ef4444" },
    { name: "Sad", value: 2, color: "#3b82f6" },
    { name: "Excited", value: 4, color: "#f59e0b" },
    { name: "Thriller", value: 1, color: "#8b5cf6" }
  ];

  const genreData = [
    { name: "Action", value: 8, color: "#ef4444" },
    { name: "Comedy", value: 6, color: "#f59e0b" },
    { name: "Drama", value: 5, color: "#3b82f6" },
    { name: "Sci-Fi", value: 4, color: "#8b5cf6" },
    { name: "Romance", value: 3, color: "#ec4899" },
    { name: "Horror", value: 2, color: "#6b7280" }
  ];

  const monthlyActivity = [
    { name: "Jan", value: 28 },
    { name: "Feb", value: 32 },
    { name: "Mar", value: 25 },
    { name: "Apr", value: 40 },
    { name: "May", value: 35 },
    { name: "Jun", value: 45 }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive": return "text-green-400";
      case "Negative": return "text-red-400";
      case "Mixed": return "text-yellow-400";
      default: return "text-muted-foreground";
    }
  };

  const getSentimentBadgeVariant = (sentiment: string) => {
    switch (sentiment) {
      case "Positive": return "default";
      case "Negative": return "destructive";
      case "Mixed": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          Search History
        </h1>
        <p className="text-muted-foreground">
          Track your movie analysis journey and discover patterns in your viewing preferences
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="gradient-card shadow-elegant">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">128</div>
            <div className="text-sm text-muted-foreground">Total Searches</div>
          </CardContent>
        </Card>
        <Card className="gradient-card shadow-elegant">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-muted-foreground">Positive Rate</div>
          </CardContent>
        </Card>
        <Card className="gradient-card shadow-elegant">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </CardContent>
        </Card>
        <Card className="gradient-card shadow-elegant">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Genres Explored</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SimpleChart 
          data={sentimentData} 
          title="Sentiment Distribution" 
          type="pie"
        />
        <SimpleChart 
          data={genreData} 
          title="Genre Preferences" 
          type="bar"
        />
        <SimpleChart 
          data={monthlyActivity} 
          title="Monthly Activity" 
          type="bar"
        />
      </div>

      {/* Recent Searches */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Recent Searches</span>
          </CardTitle>
          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear History
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSearches.map((search, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex-1">
                  <h3 className="font-semibold">{search.movie}</h3>
                  <p className="text-sm text-muted-foreground">{search.timestamp}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{search.genre}</Badge>
                  <Badge variant={getSentimentBadgeVariant(search.sentiment)}>
                    {search.sentiment}
                  </Badge>
                  <div className="text-right">
                    <div className={`font-semibold ${getSentimentColor(search.sentiment)}`}>
                      {(search.score * 100).toFixed(0)}%
                    </div>
                    <div className="text-xs text-muted-foreground">confidence</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;