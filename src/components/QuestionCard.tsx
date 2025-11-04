import { Question } from '@/data/examData';
import { Card } from '@/components/ui/card';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResults?: boolean;
  isReviewMode?: boolean;
}

export const QuestionCard = ({ 
  question, 
  questionNumber, 
  selectedAnswer, 
  onAnswerSelect,
  showResults = false,
  isReviewMode = false
}: QuestionCardProps) => {
  const getOptionClass = (optionIndex: number) => {
    let baseClass = 'question-option';
    
    if (showResults) {
      if (optionIndex === question.correctAnswer) {
        baseClass += ' correct';
      } else if (optionIndex === selectedAnswer && optionIndex !== question.correctAnswer) {
        baseClass += ' incorrect';
      }
    } else if (selectedAnswer === optionIndex) {
      baseClass += ' selected';
    }
    
    return baseClass;
  };

  const CodeBlock = ({ code, language }: { code: string; language?: string }) => (
    <div className="code-block my-4">
      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        {language && (
          <span className="text-primary font-mono">{language}</span>
        )}
      </div>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <Card className="exam-card">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
            {questionNumber}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold leading-relaxed">
              {question.question}
            </h3>
            
            {question.code && (
              <CodeBlock code={question.code} language={question.language} />
            )}
          </div>
        </div>

        <div className="space-y-3 ml-11">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={getOptionClass(index)}
              onClick={() => !isReviewMode && onAnswerSelect(index)}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(97 + index)}
                </div>
                <span className="flex-1">{option}</span>
                {showResults && index === question.correctAnswer && (
                  <span className="text-exam-correct text-sm font-semibold">✓ Correct</span>
                )}
                {showResults && index === selectedAnswer && index !== question.correctAnswer && (
                  <span className="text-exam-incorrect text-sm font-semibold">✗ Wrong</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {showResults && question.explanation && (
          <div className="ml-11 mt-4 p-3 bg-muted/50 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-muted-foreground">
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};