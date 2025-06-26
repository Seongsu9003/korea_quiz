import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  current: number;
  total: number;
  percentage: number;
  progressText: string;
}

export function QuizProgress({ current, total, percentage, progressText }: QuizProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{progressText}</span>
        <span className="text-sm font-medium text-[hsl(var(--korean-blue))]">
          {current} / {total}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="w-full h-2"
        style={{
          background: 'hsl(210, 13%, 88%)'
        }}
      />
      <style jsx>{`
        .progress-indicator {
          background: linear-gradient(to right, hsl(var(--korean-blue)), hsl(var(--korean-violet)));
        }
      `}</style>
    </div>
  );
}
