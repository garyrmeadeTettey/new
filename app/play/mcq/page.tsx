import MCQ from '@/components/MCQ';
import { FC } from 'react';

interface MCQProps {
  questions: any[]; // Define the type for the 'questions' prop here
}

const Page: FC<MCQProps> = ({ questions }) => {
  return <MCQ questions={questions} />; // Pass the 'questions' prop to MCQ
};

export default Page;
