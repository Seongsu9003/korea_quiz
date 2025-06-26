import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Share2, Trophy, Users, Utensils, Car, Smartphone } from "lucide-react";
import { type QuizResult } from "@/hooks/useQuiz";

interface ResultsCardProps {
  results: QuizResult;
  onRetake: () => void;
  onShare: () => void;
  translations: {
    results_title: string;
    results_description: string;
    score: string;
    your_persona: string;
    daily_life: string;
    social_customs: string;
    food_culture: string;
    transportation: string;
    technology: string;
    retake_quiz: string;
    share_results: string;
  };
}

const categoryIcons = {
  daily_life: Utensils,
  social_customs: Users,
  food_culture: Utensils,
  transportation: Car,
  technology: Smartphone,
};

const categoryColors = {
  daily_life: 'bg-[hsl(var(--korean-blue))]/10 text-[hsl(var(--korean-blue))]',
  social_customs: 'bg-[hsl(var(--jade-green))]/10 text-[hsl(var(--jade-green))]',
  food_culture: 'bg-[hsl(var(--warm-amber))]/10 text-[hsl(var(--warm-amber))]',
  transportation: 'bg-[hsl(var(--korean-violet))]/10 text-[hsl(var(--korean-violet))]',
  technology: 'bg-[hsl(var(--korean-red))]/10 text-[hsl(var(--korean-red))]',
};

export function ResultsCard({ results, onRetake, onShare, translations }: ResultsCardProps) {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {translations.results_title}
        </h2>
        <p className="text-lg text-gray-600">
          {translations.results_description}
        </p>
      </div>

      <Card className="shadow-xl border border-gray-200 max-w-2xl mx-auto">
        <CardContent className="p-8 space-y-6">
          {/* Score Circle */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 korean-gradient rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {results.percentage}%
                  </div>
                  <div className="text-xs text-white/80">
                    {translations.score}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Level Badge */}
          <div className="text-center">
            <Badge className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--jade-green))] to-[hsl(var(--warm-amber))] text-white font-semibold text-lg hover:bg-gradient-to-r">
              <Trophy className="mr-2 h-4 w-4" />
              {results.persona.level}
            </Badge>
          </div>

          {/* Persona Card */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--korean-violet))] to-[hsl(var(--korean-red))] rounded-full flex items-center justify-center text-2xl">
                  {results.persona.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    {results.persona.title}
                  </h3>
                  <p className="text-gray-600">
                    {translations.your_persona}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-left">
                {results.persona.description}
              </p>
            </CardContent>
          </Card>

          {/* Category Scores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(results.categoryScores).map(([category, scores]) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Users;
              const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors.social_customs;
              const categoryName = translations[category as keyof typeof translations] || category;
              
              return (
                <div
                  key={category}
                  className={`${colorClass} rounded-lg p-4 text-center`}
                >
                  <IconComponent className="mx-auto text-2xl mb-2" size={24} />
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {categoryName}
                  </div>
                  <div className="text-lg font-bold">
                    {scores.correct}/{scores.total}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          onClick={onRetake}
          className="flex items-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>{translations.retake_quiz}</span>
        </Button>
        
        <Button
          onClick={onShare}
          className="flex items-center space-x-2 bg-[hsl(var(--korean-blue))] hover:bg-[hsl(217,85%,45%)] text-white"
        >
          <Share2 className="h-4 w-4" />
          <span>{translations.share_results}</span>
        </Button>
      </div>
    </div>
  );
}
