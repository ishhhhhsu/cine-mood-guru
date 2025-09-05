// Simplified chart component to avoid TypeScript issues
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  name: string;
  value: number;
  color?: string;
}

interface SimpleChartProps {
  data: ChartData[];
  title: string;
  type?: "bar" | "pie";
}

export const SimpleChart = ({ data, title, type = "bar" }: SimpleChartProps) => {
  const maxValue = Math.max(...data.map(d => d.value));

  if (type === "pie") {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.map((item, index) => {
              const percentage = Math.round((item.value / total) * 100);
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color || `hsl(${index * 137.5 % 360}, 70%, 50%)` }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{percentage}%</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="gradient-card shadow-elegant">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => {
            const barWidth = (item.value / maxValue) * 100;
            return (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ 
                      width: `${barWidth}%`,
                      backgroundColor: item.color || 'hsl(var(--primary))'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};