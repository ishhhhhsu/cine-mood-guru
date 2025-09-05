import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Star, Send, ThumbsUp, ThumbsDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const feedbackTypes = [
    "Bug Report",
    "Feature Request", 
    "Accuracy Feedback",
    "UI/UX Suggestion",
    "Performance Issue",
    "General Feedback"
  ];

  const recentFeedback = [
    {
      type: "Feature Request",
      message: "Would love to see more detailed emotion breakdowns!",
      rating: 5,
      status: "In Progress",
      date: "2024-01-15"
    },
    {
      type: "Bug Report", 
      message: "Search sometimes doesn't return results for new movies",
      rating: 3,
      status: "Fixed",
      date: "2024-01-14"
    },
    {
      type: "Accuracy Feedback",
      message: "The sentiment analysis for comedy movies seems very accurate",
      rating: 5,
      status: "Reviewed",
      date: "2024-01-13"
    }
  ];

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedbackType || !message || rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and provide a rating.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Feedback Submitted!",
      description: "Thank you for helping us improve CineScope.",
    });

    // Reset form
    setRating(0);
    setFeedbackType("");
    setEmail("");
    setMessage("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Fixed": return "default";
      case "In Progress": return "secondary";
      case "Reviewed": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
          Your Feedback Matters
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Help us improve CineScope by sharing your thoughts, reporting bugs, 
          or suggesting new features. Your input drives our development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>Submit Feedback</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Overall Rating *
                </label>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-6 w-6 cursor-pointer transition-colors ${
                        index < rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-muted-foreground hover:text-yellow-400"
                      }`}
                      onClick={() => handleStarClick(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Feedback Type */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Feedback Type *
                </label>
                <Select value={feedbackType} onValueChange={setFeedbackType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select feedback type" />
                  </SelectTrigger>
                  <SelectContent>
                    {feedbackTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email (Optional)
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Your Message *
                </label>
                <Textarea
                  placeholder="Please provide detailed feedback..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Feedback & Community */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Report Accurate Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ThumbsDown className="h-4 w-4 mr-2" />
                Report Inaccurate Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Suggest a Feature
              </Button>
            </CardContent>
          </Card>

          {/* Recent Community Feedback */}
          <Card className="gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle>Recent Community Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <div key={index} className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{feedback.type}</Badge>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusColor(feedback.status)}>
                          {feedback.status}
                        </Badge>
                        <div className="flex">
                          {[...Array(feedback.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {feedback.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {feedback.date}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;