import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Film, Home, Clock, MessageSquare, Info, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/history", label: "History", icon: Clock },
    { path: "/feedback", label: "Feedback", icon: MessageSquare },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Film className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              CineScope
            </h1>
            <p className="text-xs text-muted-foreground">AI Movie Sentiment</p>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                >
                  <Link to={item.path} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;