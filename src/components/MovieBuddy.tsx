import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, X, RefreshCw } from "lucide-react";
import movieBuddyImage from "@/assets/movie-buddy.png";

const MovieBuddy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);

  const randomSuggestions = [
    "🎬 How about watching 'The Dark Knight' - a thrilling superhero masterpiece?",
    "🍿 In the mood for comedy? 'Superbad' will have you laughing all night!",
    "💔 Need a good cry? 'The Notebook' is perfect for emotional moments.",
    "🚀 Ready for action? 'Mad Max: Fury Road' is an adrenaline rush!",
    "🧠 Want something mind-bending? 'Inception' will blow your mind!",
    "👻 Feeling brave? 'Hereditary' will give you chills!",
  ];

  const getRandomSuggestion = () => {
    const newIndex = (currentSuggestion + 1) % randomSuggestions.length;
    setCurrentSuggestion(newIndex);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 p-4 gradient-card shadow-elegant animate-in slide-in-from-bottom-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <img 
                src={movieBuddyImage} 
                alt="Movie Buddy" 
                className="w-8 h-8 animate-float"
              />
              <h3 className="font-semibold text-primary">CineBot</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {randomSuggestions[currentSuggestion]}
          </p>
          
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={getRandomSuggestion}
              className="flex-1"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Another
            </Button>
            <Button variant="default" size="sm" className="flex-1">
              Tell me more
            </Button>
          </div>
        </Card>
      )}

      <Button
        variant="hero"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full animate-pulse-glow"
      >
        <Sparkles className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MovieBuddy;