import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface ExamTimerProps {
  duration: number; // in minutes
  onTimeUp: () => void;
  isActive: boolean;
}

export const ExamTimer = ({ duration, onTimeUp, isActive }: ExamTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isWarning = timeLeft < 300; // less than 5 minutes
  const isCritical = timeLeft < 60; // less than 1 minute

  return (
    <div className={`exam-timer flex items-center gap-2 ${
      isCritical ? 'animate-pulse' : ''
    } ${
      isWarning ? 'border-exam-warning text-exam-warning' : ''
    }`}>
      <Clock className="w-4 h-4" />
      <span className="text-lg">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};