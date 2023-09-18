'use client'
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import {Card} from './ui/card';
import {Separator} from './ui/separator';
import {prisma} from '../lib/db'

export async function Save(){
try{
  const body = await req.json();
  const { topic, type, amount } = quizCreationSchema.parse(body);
  const game = await prisma.game.create({
    data: {
      gameType: type,
      timeStarted: new Date(),
      userId: session.user.id,
      topic,
    },
  });
} catch(e) {
  console.log(e);
}
}
const QuizResults = () => {
  const router = useRouter();

  // Retrieve the query parameters from the URL
  const query = useSearchParams();
  const generatedQuestions = query.get("generatedQuestions");
  const generatedAnswers = query.get("generatedAnswers");

  // Check if the data is available
  if (!generatedQuestions || !generatedAnswers) {
    return <div>Data not available</div>;
  }

  // Parse the data
  const questions = JSON.parse(generatedQuestions);
  const answers = JSON.parse(generatedAnswers);

  // Initialize state to store the user's selected answers
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  // Function to handle user's answer selection
  const handleSelectAnswer = (index, selectedOption) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = selectedOption;
    setUserAnswers(newUserAnswers);
  };

  // Function to calculate the user's score
  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (String(userAnswers[i]) === String(answers[i].answer)) {
        score++;
      }
    }
    Save();
    return score;
  };

  
  // Render the data with interactive form
  return (
    <div className="absolute -translate-x-1/2  top-1/4 bottom-1/4 left-1/2">
    <Card>
      <div className="flex flex-col mt-6 ml-4 pr-8">
          <p>
            <span className="text-slate-400">Topic</span> &nbsp;
            <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
              QuizResults
            </span>
          </p>
          <br />
        <form onSubmit={(e) => e.preventDefault()} scrollable={true}>
          {questions.map((question, index) => (
            <Card className="w-[780px] ml-4 h-full mt-2" key={index}>
              <div className="ml-2 flex flex-col items-left justify-center w-full mt-4">
              <p className='font-bold'>Question {index + 1}: {question.question}</p>
              <Separator className='w-[700px]'/>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option1}
                      checked={userAnswers[index] === answers[index].option1}
                      onChange={() => handleSelectAnswer(index, answers[index].option1)}
                    />
                    {answers[index].option1}
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option2}
                      checked={userAnswers[index] === answers[index].option2}
                      onChange={() => handleSelectAnswer(index, answers[index].option2)}
                    />
                    {answers[index].option2}
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name={`question${index}`}
                      value={answers[index].option3}
                      checked={userAnswers[index] === answers[index].option3}
                      onChange={() => handleSelectAnswer(index, answers[index].option3)}
                    />
                    {answers[index].option3}
                  </label>
                </li>
              </ul>
              </div>
            </Card>
          ))}
          <br />
          <Button className='ml-4' href='/' onClick={() => alert(`Your score: ${calculateScore()}`)}>Submit</Button>
        </form>
      </div>
    </Card>
   </div>
  );
};

export default QuizResults;
