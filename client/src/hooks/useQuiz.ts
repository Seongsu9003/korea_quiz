import { useState, useCallback, useMemo } from "react";
import { quizData, personas, type Question, type Persona } from "@/data/quizData";

interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
  isCompleted: boolean;
  isLoading: boolean;
}

interface QuizResult {
  score: number;
  percentage: number;
  persona: Persona;
  categoryScores: Record<string, { correct: number; total: number }>;
}

export function useQuiz(language: string = 'en') {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    isCompleted: false,
    isLoading: false,
  });

  // Randomize questions on quiz start
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const startQuiz = useCallback(() => {
    const questions = quizData[language]?.questions || quizData.en.questions;
    const shuffled = shuffleArray(questions);
    setRandomizedQuestions(shuffled);
    setState({
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false,
      isLoading: false,
    });
  }, [language, shuffleArray]);

  const answerQuestion = useCallback((answerIndex: number) => {
    setState(prev => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;
      return {
        ...prev,
        answers: newAnswers,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const isLastQuestion = prev.currentQuestionIndex >= randomizedQuestions.length - 1;
      
      if (isLastQuestion) {
        return {
          ...prev,
          isLoading: true,
        };
      }
      
      return {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, [randomizedQuestions.length]);

  const previousQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1),
    }));
  }, []);

  const finishQuiz = useCallback(() => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate processing time
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isCompleted: true,
        isLoading: false,
      }));
    }, 2000);
  }, []);

  const restartQuiz = useCallback(() => {
    startQuiz();
  }, [startQuiz]);

  const currentQuestion = useMemo(() => {
    if (randomizedQuestions.length === 0) return null;
    return randomizedQuestions[state.currentQuestionIndex] || null;
  }, [randomizedQuestions, state.currentQuestionIndex]);

  const progress = useMemo(() => {
    if (randomizedQuestions.length === 0) return 0;
    return ((state.currentQuestionIndex + 1) / randomizedQuestions.length) * 100;
  }, [randomizedQuestions.length, state.currentQuestionIndex]);

  const canGoNext = useMemo(() => {
    return state.answers[state.currentQuestionIndex] !== undefined;
  }, [state.answers, state.currentQuestionIndex]);

  const canGoPrevious = useMemo(() => {
    return state.currentQuestionIndex > 0;
  }, [state.currentQuestionIndex]);

  const isLastQuestion = useMemo(() => {
    return state.currentQuestionIndex >= randomizedQuestions.length - 1;
  }, [state.currentQuestionIndex, randomizedQuestions.length]);

  const results = useMemo((): QuizResult | null => {
    if (!state.isCompleted || randomizedQuestions.length === 0) return null;

    let correctAnswers = 0;
    const categoryScores: Record<string, { correct: number; total: number }> = {};

    state.answers.forEach((answer, index) => {
      const question = randomizedQuestions[index];
      if (!question) return;

      const category = question.category;
      if (!categoryScores[category]) {
        categoryScores[category] = { correct: 0, total: 0 };
      }
      categoryScores[category].total++;

      if (answer === question.correctAnswer) {
        correctAnswers++;
        categoryScores[category].correct++;
      }
    });

    const percentage = Math.round((correctAnswers / randomizedQuestions.length) * 100);
    const persona = personas.find(p => percentage >= p.minScore && percentage <= p.maxScore) || personas[0];

    return {
      score: correctAnswers,
      percentage,
      persona,
      categoryScores,
    };
  }, [state.isCompleted, state.answers, randomizedQuestions]);

  return {
    // State
    currentQuestionIndex: state.currentQuestionIndex,
    answers: state.answers,
    isCompleted: state.isCompleted,
    isLoading: state.isLoading,
    currentQuestion,
    progress,
    canGoNext,
    canGoPrevious,
    isLastQuestion,
    results,
    totalQuestions: randomizedQuestions.length,
    
    // Actions
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    finishQuiz,
    restartQuiz,
  };
}
