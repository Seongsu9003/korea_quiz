import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Clock, HelpCircle, Trophy, Calculator } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { QuizProgress } from "@/components/QuizProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsCard } from "@/components/ResultsCard";
import { useQuiz } from "@/hooks/useQuiz";
import { translations } from "@/data/translations";
import { useToast } from "@/hooks/use-toast";

type Screen = 'welcome' | 'quiz' | 'loading' | 'results';

export default function Quiz() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [language, setLanguage] = useState('en');
  const { toast } = useToast();
  
  const quiz = useQuiz(language);
  const t = translations[language] || translations.en;

  useEffect(() => {
    if (quiz.isLoading && currentScreen === 'quiz') {
      setCurrentScreen('loading');
    } else if (quiz.isCompleted) {
      setCurrentScreen('results');
    }
  }, [quiz.isLoading, quiz.isCompleted, currentScreen]);

  const handleStartQuiz = () => {
    quiz.startQuiz();
    setCurrentScreen('quiz');
  };

  const handleNextQuestion = () => {
    if (!quiz.canGoNext) {
      toast({
        title: t.select_answer,
        variant: "destructive"
      });
      return;
    }
    
    if (quiz.isLastQuestion) {
      quiz.finishQuiz();
    } else {
      quiz.nextQuestion();
    }
  };

  const handleRetakeQuiz = () => {
    quiz.restartQuiz();
    setCurrentScreen('welcome');
  };

  const handleShareResults = async () => {
    if (!quiz.results) return;

    const shareText = `I just completed the Korean Life Adaptation Test and got ${quiz.results.percentage}%! I'm a ${quiz.results.persona.title}. Try it yourself!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Korean Life Adaptation Test Results',
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText + ' ' + window.location.href);
        toast({
          title: "Results copied to clipboard!",
        });
      } catch (error) {
        toast({
          title: "Could not copy to clipboard",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-[hsl(var(--korean-blue))]/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 korean-gradient rounded-lg flex items-center justify-center">
                <Globe className="text-white text-lg" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Korean Life Adaptation Test
                </h1>
                <p className="text-sm text-gray-600">한국생활적응력테스트</p>
              </div>
            </div>
            
            <LanguageSelector value={language} onValueChange={setLanguage} />
          </div>
        </div>
      </header>

      {/* Main Content */}
<main className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Welcome Screen */}
        {currentScreen === 'welcome' && (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="w-32 h-32 mx-auto korean-cultural-bg rounded-full flex items-center justify-center shadow-xl float-animation">
                <Heart className="text-white text-4xl" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t.welcome_title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t.welcome_description}
              </p>
            </div>

            <Card className="shadow-lg border border-gray-200 max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-[hsl(var(--korean-blue))]" size={20} />
                  <span className="text-gray-700">{t.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="text-[hsl(var(--jade-green))]" size={20} />
                  <span className="text-gray-700">{t.questions_count}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-[hsl(var(--warm-amber))]" size={20} />
                  <span className="text-gray-700">{t.get_persona}</span>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="bg-[hsl(var(--korean-blue))] hover:bg-[hsl(217,85%,45%)] text-white border-2 border-[hsl(var(--korean-blue))] font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              {t.start_quiz}
            </Button>
          </div>
        )}

        {/* Quiz Screen */}
        {currentScreen === 'quiz' && quiz.currentQuestion && (
          <div>
            <QuizProgress
              current={quiz.currentQuestionIndex + 1}
              total={quiz.totalQuestions}
              percentage={quiz.progress}
              progressText={t.progress}
            />
            
            <QuestionCard
              question={quiz.currentQuestion}
              selectedAnswer={quiz.answers[quiz.currentQuestionIndex]}
              onAnswerSelect={quiz.answerQuestion}
              onNext={handleNextQuestion}
              onPrevious={quiz.previousQuestion}
              canGoNext={quiz.canGoNext}
              canGoPrevious={quiz.canGoPrevious}
              isLastQuestion={quiz.isLastQuestion}
              translations={{
                previous: t.previous,
                next: t.next,
                finish: t.finish,
              }}
            />
          </div>
        )}

        {/* Loading Screen */}
        {currentScreen === 'loading' && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-[hsl(var(--korean-blue))] rounded-full flex items-center justify-center animate-pulse">
                <Calculator className="text-white text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t.calculating}
              </h3>
              <p className="text-gray-600">
                {t.please_wait}
              </p>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {currentScreen === 'results' && quiz.results && (
          <ResultsCard
            results={quiz.results}
            onRetake={handleRetakeQuiz}
            onShare={handleShareResults}
            translations={{
              results_title: t.results_title,
              results_description: t.results_description,
              score: t.score,
              your_persona: t.your_persona,
              daily_life: t.daily_life,
              social_customs: t.social_customs,
              food_culture: t.food_culture,
              transportation: t.transportation,
              technology: t.technology,
              retake_quiz: t.retake_quiz,
              share_results: t.share_results,
            }}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>{t.footer_text}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
