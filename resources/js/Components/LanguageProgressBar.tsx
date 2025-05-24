
import { Progress } from "@/Components/ui/progress";
import { Badge } from "@/Components/ui/badge";
 import { Language } from "@/data/props";

interface LanguageProgressBarProps {
  language: Language;
}

const LanguageProgressBar = ({ language }: LanguageProgressBarProps) => {
  // Map of language names to color classes
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-blue-700",
    "React Native": "bg-blue-400",
    React: "bg-blue-400",
    Swift: "bg-orange-500",
    Kotlin: "bg-purple-500",
    PHP: "bg-indigo-600",
    CSS: "bg-pink-500",
    "HTML/CSS": "bg-pink-500",
    SQL: "bg-green-600",
    "Node.js": "bg-green-500",
    R: "bg-blue-900",
    AI: "bg-green-800",
  };

  const defaultColor = "bg-gray-500";
  const colorClass = languageColors[language.name] || defaultColor;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <Badge className={`${colorClass} text-white`}>{language.name}</Badge>
        </div>
        <span className="text-sm text-gray-600 font-medium">{language.percentage}%</span>
      </div>
      <Progress value={language.percentage} className="h-2"   />
    </div>
  );
};

export default LanguageProgressBar;
