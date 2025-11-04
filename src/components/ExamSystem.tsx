import { useState, useEffect } from 'react';
import { examQuestions, examConfig } from '@/data/examData';
import { ExamTimer } from './ExamTimer';
import { QuestionCard } from './QuestionCard';
import { ExamResults } from './ExamResults';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ExamState = 'start' | 'taking' | 'submitted' | 'review';

export const ExamSystem = () => {
  const [examState, setExamState] = useState<ExamState>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(examQuestions.length).fill(null)
  );
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const { toast } = useToast();

  const handleStartExam = () => {
    setExamState('taking');
    setStartTime(new Date());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleTimeUp = () => {
    if (examState === 'taking') {
      setEndTime(new Date());
      setExamState('submitted');
      toast({
        title: "Time's Up!",
        description: "Your exam has been automatically submitted.",
        variant: "destructive"
      });
    }
  };

  const handleSubmitExam = () => {
    const unansweredCount = answers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
      toast({
        title: "Incomplete Exam",
        description: `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`,
        variant: "destructive"
      });
      
      const confirmed = window.confirm(
        `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`
      );
      
      if (!confirmed) return;
    }

    setEndTime(new Date());
    setExamState('submitted');
    toast({
      title: "Exam Submitted",
      description: "Your exam has been successfully submitted!",
      variant: "default"
    });
  };

  const handleRestartExam = () => {
    setExamState('start');
    setCurrentQuestion(0);
    setAnswers(new Array(examQuestions.length).fill(null));
    setStartTime(null);
    setEndTime(null);
  };

  const handleReviewAnswers = () => {
    setExamState('review');
    setCurrentQuestion(0);
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === examQuestions[index].correctAnswer
    ).length;
    return Math.round((correctAnswers / examQuestions.length) * 100);
  };

  const getTimeSpent = () => {
    if (!startTime) return '00:00';
    const endTimeActual = endTime || new Date();
    const diffMs = endTimeActual.getTime() - startTime.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffSecs = Math.floor((diffMs % 60000) / 1000);
    return `${diffMins.toString().padStart(2, '0')}:${diffSecs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / examQuestions.length) * 100;
  const answeredCount = answers.filter(answer => answer !== null).length;

  if (examState === 'start') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="exam-card max-w-2xl w-full text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-primary/20 text-primary rounded-full p-4">
                <BookOpen className="w-16 h-16" />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-2">{examConfig.title}</h1>
              <p className="text-muted-foreground">Online Assessment System</p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">Exam Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p><strong>Duration:</strong> {examConfig.duration} minutes</p>
                  <p><strong>Questions:</strong> {examConfig.totalQuestions}</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Passing Score:</strong> {examConfig.passingScore}%</p>
                  <p><strong>Type:</strong> Multiple Choice</p>
                </div>
              </div>
              <div className="text-left space-y-2 text-sm text-muted-foreground">
                <p>• Read each question carefully before answering</p>
                <p>• You can navigate between questions using the navigation buttons</p>
                <p>• Code snippets are provided for programming questions</p>
                <p>• Submit your exam before time runs out</p>
                <p>• You can review your answers after submission</p>
              </div>
            </div>

            <Button 
              onClick={handleStartExam}
              size="lg"
              className="w-full md:w-auto px-8"
            >
              Start Exam
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (examState === 'submitted') {
    return (
      <div className="min-h-screen bg-background p-4 py-8">
        <ExamResults
          questions={examQuestions}
          answers={answers}
          score={calculateScore()}
          passingScore={examConfig.passingScore}
          timeSpent={getTimeSpent()}
          onRestart={handleRestartExam}
          onReview={handleReviewAnswers}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">{examConfig.title}</h1>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {examQuestions.length}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Answered: {answeredCount}/{examQuestions.length}
              </div>
              <ExamTimer
                duration={examConfig.duration}
                onTimeUp={handleTimeUp}
                isActive={examState === 'taking'}
              />
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 py-6">
        <QuestionCard
          question={examQuestions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          selectedAnswer={answers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          showResults={examState === 'review'}
          isReviewMode={examState === 'review'}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {examState === 'taking' && currentQuestion === examQuestions.length - 1 ? (
              <Button
                onClick={handleSubmitExam}
                className="flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Exam
              </Button>
            ) : examState === 'review' && currentQuestion === examQuestions.length - 1 ? (
              <Button
                onClick={handleRestartExam}
                className="flex items-center gap-2"
              >
                Take Exam Again
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQuestion(prev => 
                  Math.min(examQuestions.length - 1, prev + 1)
                )}
                disabled={currentQuestion === examQuestions.length - 1}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Question Navigation */}
        <Card className="exam-card mt-6">
          <h3 className="text-lg font-semibold mb-4">Question Navigation</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {examQuestions.map((_, index) => {
              const isAnswered = answers[index] !== null;
              const isCurrent = index === currentQuestion;
              
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold border transition-all ${
                    isCurrent
                      ? 'border-primary bg-primary text-primary-foreground'
                      : isAnswered
                      ? 'border-green-500 bg-green-500/20 text-green-400 hover:bg-green-500/30'
                      : 'border-muted bg-muted/20 text-muted-foreground hover:bg-muted/40'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};