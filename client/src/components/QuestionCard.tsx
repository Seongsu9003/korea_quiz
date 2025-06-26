import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Question } from "@/data/quizData";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
  translations: {
    previous: string;
    next: string;
    finish: string;
  };
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isLastQuestion,
  translations,
}: QuestionCardProps) {
  return (
    <Card className="shadow-lg border border-gray-200">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {question.question}
          </h3>
          
          <RadioGroup
            value={selectedAnswer !== undefined ? selectedAnswer.toString() : undefined}
            onValueChange={(value) => {
              console.log('Radio selection:', value);
              onAnswerSelect(parseInt(value));
            }}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[hsl(var(--korean-blue))] transition-colors cursor-pointer"
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  className="text-[hsl(var(--korean-blue))] focus:ring-[hsl(var(--korean-blue))]"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="text-gray-700 cursor-pointer flex-1"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{translations.previous}</span>
          </Button>
          
          <Button
            onClick={onNext}
            disabled={!canGoNext}
            className={`flex items-center space-x-2 text-white border-2 transition-all duration-200 ${
              canGoNext 
                ? 'bg-[hsl(217,85%,54%)] hover:bg-[hsl(217,85%,45%)] border-[hsl(217,85%,54%)] cursor-pointer' 
                : 'bg-gray-400 border-gray-400 cursor-not-allowed opacity-60'
            }`}
            style={canGoNext ? {
              backgroundColor: 'hsl(217, 85%, 54%)',
              borderColor: 'hsl(217, 85%, 54%)',
              color: 'white'
            } : {
              backgroundColor: 'hsl(0, 0%, 60%)',
              borderColor: 'hsl(0, 0%, 60%)',
              color: 'white'
            }}
          >
            <span>{isLastQuestion ? translations.finish : translations.next}</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
