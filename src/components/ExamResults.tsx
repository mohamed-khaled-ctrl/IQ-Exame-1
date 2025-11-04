import { Question } from '@/data/examData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface ExamResultsProps {
  questions: Question[];
  answers: (number | null)[];
  score: number;
  passingScore: number;
  timeSpent: string;
  onRestart: () => void;
  onReview: () => void;
}

export const ExamResults = ({ 
  questions, 
  answers, 
  score, 
  passingScore, 
  timeSpent,
  onRestart,
  onReview
}: ExamResultsProps) => {
  const correctAnswers = answers.filter((answer, index) => 
    answer === questions[index].correctAnswer
  ).length;
  
  const isPassed = score >= passingScore;

  const getScoreColor = () => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="exam-card text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className={`rounded-full p-4 ${
              isPassed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              <Award className="w-16 h-16" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Exam Completed!</h1>
            <p className="text-muted-foreground">Functions & Pseudo Code Assessment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className={`text-4xl font-bold ${getScoreColor()}`}>
                {score}%
              </div>
              <p className="text-sm text-muted-foreground">Final Score</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">
                {correctAnswers}/{questions.length}
              </div>
              <p className="text-sm text-muted-foreground">Correct Answers</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">
                {timeSpent}
              </div>
              <p className="text-sm text-muted-foreground">Time Spent</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isPassed 
              ? 'bg-green-500/10 border border-green-500/20' 
              : 'bg-red-500/10 border border-red-500/20'
          }`}>
            <div className="flex items-center justify-center gap-2">
              {isPassed ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
              <span className={`font-semibold ${
                isPassed ? 'text-green-400' : 'text-red-400'
              }`}>
                {isPassed ? 'Congratulations! You Passed!' : 'Unfortunately, You Did Not Pass'}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Passing score: {passingScore}%
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <Button 
              onClick={onReview}
              variant="outline"
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Review Answers
            </Button>
            
            <Button 
              onClick={onRestart}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </Button>
          </div>
        </div>
      </Card>

      <Card className="exam-card">
        <h3 className="text-lg font-semibold mb-4">Question Summary</h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {questions.map((question, index) => {
            const isCorrect = answers[index] === question.correctAnswer;
            const isAnswered = answers[index] !== null;
            
            return (
              <div
                key={question.id}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold border ${
                  !isAnswered 
                    ? 'border-muted bg-muted/20 text-muted-foreground'
                    : isCorrect
                    ? 'border-green-500 bg-green-500/20 text-green-400'
                    : 'border-red-500 bg-red-500/20 text-red-400'
                }`}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500/20 border border-red-500"></div>
            <span>Incorrect</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-muted/20 border border-muted"></div>
            <span>Not Answered</span>
          </div>
        </div>
      </Card>
    </div>
  );
};