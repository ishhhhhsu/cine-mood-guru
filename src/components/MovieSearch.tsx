import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, RotateCcw, Sparkles, Heart, Frown, Smile } from "lucide-react";

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [sentiment, setSentiment] = useState<any>(null);

  const genres = [
    "Action", "Comedy", "Drama", "Horror", "Thriller", 
    "Romance", "Sci-Fi", "Fantasy", "Animation", "Documentary"
  ];

  const moods = [
    { value: "happy", label: "Happy", icon: Smile, color: "text-green-400" },
    { value: "sad", label: "Sad", icon: Frown, color: "text-blue-400" },
    { value: "excited", label: "Excited", icon: Heart, color: "text-red-400" },
  ];

  const mockRecommendations = [
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", mood: "excited" },
    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", mood: "excited" },
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi", mood: "happy" },
    { title: "The Prestige", year: 2006, rating: 8.5, genre: "Thriller", mood: "excited" },
    { title: "Memento", year: 2000, rating: 8.4, genre: "Thriller", mood: "excited" },
  ];

  const handleSearch = () => {
    // Mock sentiment analysis
    setSentiment({
      movie: searchQuery,
      overall: "Positive",
      score: 0.85,
      emotions: {
        joy: 45,
        excitement: 30,
        satisfaction: 20,
        anticipation: 5
      }
    });
    
    // Mock recommendations based on mood and genre
    let filtered = mockRecommendations;
    if (selectedMood) {
      filtered = filtered.filter(movie => movie.mood === selectedMood);
    }
    if (selectedGenre) {
      filtered = filtered.filter(movie => movie.genre === selectedGenre);
    }
    setRecommendations(filtered.slice(0, 5));
  };

  const handleClear = () => {
    setSearchQuery("");
    setSelectedGenre("");
    setSelectedMood("");
    setSentiment(null);
    setRecommendations([]);
  };

  const getMoreRecommendations = () => {
    // Add 5 more recommendations
    const moreMovies = [
      { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Drama", mood: "excited" },
      { title: "The Godfather", year: 1972, rating: 9.2, genre: "Drama", mood: "happy" },
      { title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama", mood: "happy" },
      { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi", mood: "excited" },
      { title: "Goodfellas", year: 1990, rating: 8.7, genre: "Drama", mood: "excited" },
    ];
    setRecommendations([...recommendations, ...moreMovies.slice(0, 5)]);
  };

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Movie Sentiment Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter movie name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button variant="default" onClick={handleSearch}>
              Analyze
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger>
                <SelectValue placeholder="Select Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre.toLowerCase()}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedMood} onValueChange={setSelectedMood}>
              <SelectTrigger>
                <SelectValue placeholder="Select Mood" />
              </SelectTrigger>
              <SelectContent>
                {moods.map((mood) => (
                  <SelectItem key={mood.value} value={mood.value}>
                    <div className="flex items-center space-x-2">
                      <mood.icon className={`h-4 w-4 ${mood.color}`} />
                      <span>{mood.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={handleClear}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sentiment Analysis Results */}
      {sentiment && (
        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle>Sentiment Analysis: {sentiment.movie}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{sentiment.overall}</div>
                <div className="text-sm text-muted-foreground">Overall</div>
              </div>
              {Object.entries(sentiment.emotions).map(([emotion, percentage]) => (
                <div key={emotion} className="text-center">
                  <div className="text-xl font-semibold">{percentage as number}%</div>
                  <div className="text-sm text-muted-foreground capitalize">{emotion}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <Card className="gradient-card shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Recommended Movies</span>
            </CardTitle>
            <Button variant="secondary" onClick={getMoreRecommendations}>
              Get More
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((movie, index) => (
                <Card key={index} className="gradient-card border border-border/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{movie.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Year: {movie.year}</p>
                      <p>Rating: ⭐ {movie.rating}</p>
                      <div className="flex space-x-2 mt-2">
                        <Badge variant="secondary">{movie.genre}</Badge>
                        <Badge variant="outline" className="capitalize">
                          {movie.mood}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MovieSearch;