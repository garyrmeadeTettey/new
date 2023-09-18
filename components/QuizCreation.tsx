"use client"
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { redirect, useRouter, useSearchParams} from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingQuestions from "./LoadingQuestions";
import { quizCreationSchema } from "@/schemas/form/quiz";
import { useChat } from 'ai/react';
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { question } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { nanoid } from 'nanoid'
import { auth } from "@clerk/nextjs";
type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;
type NewQuestion = typeof question.$inferInsert;

const QuizCreation = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);
  const [generatedAnswers, setGeneratedAnswers] = useState<any[]>([]);
  const [responseData, setResponseData] = useState<any | null>(null);

  const form = useForm<Input>({
    defaultValues: {
      topic: '',
      type: "mcq",
      amount: 3,
    },
  });

  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    data,
    isLoading,
  } = useChat({
    body: {
      topic: form.watch('topic'),
      amount: form.watch('amount'),
      type: form.watch('type'),
    },
    onResponse: async (response) => {
      if (response.ok) {
        try {
          const responseData = await response.json();
          setGeneratedQuestions(responseData.question.questions);
          setGeneratedAnswers(responseData.question.answers);
          setResponseData(responseData);

          const queryParams = new URLSearchParams();
          queryParams.append("generatedQuestions", JSON.stringify(responseData.question.questions));
          queryParams.append("generatedAnswers", JSON.stringify(responseData.question.answers));
          
          const queryString = queryParams.toString();
          const url = `/questions?${queryString}`;
          
          router.push(url);
          
        } catch {
          // Handle error response
          console.error("API error:", response.status, response.statusText);
        }
      }
    }
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLoader(true);
    handleSubmit(e);
    
    // db.insert(question)
    //   .values({ question: "question", answer: "answer",
    //                   options: generatedAnswers, questionType: 'mcq', // Set the question type accordingly
    //                   userAnswer: 'default_user_answer', })
    // };

  }
  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <div className="animate-pulse absolute -translate-x-1/2   left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>Choose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter a topic"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleInputChange(e);
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Please provide any topic you would like to be quizzed on
                        here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Questions</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How many questions?"
                          type="number"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            form.setValue('amount', parseInt(e.target.value));
                            handleInputChange(e);
                          }}
                          min={1}
                          max={10}
                        />
                      </FormControl>
                      <FormDescription>
                        You can choose how many questions you would like to be
                        quizzed on here.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <Button
                    variant={
                      form.getValues("type") === "mcq" ? "default" : "secondary"
                    }
                    className="w-1/2 rounded-none rounded-l-lg"
                    onClick={(e) => {
                      form.setValue("type", "mcq");
                    }}
                    type="button"
                  >
                    <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                  </Button>
                  <Separator orientation="vertical" />
                  <Button
                    variant={
                      form.getValues("type") === "open_ended"
                        ? "default"
                        : "secondary"
                    }
                    className="w-1/2 rounded-none rounded-r-lg"
                    onClick={(e) => {
                      form.setValue("type", "open_ended");
                    }}
                    type="button"
                  >
                    <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                  </Button>
                </div>
                <Button disabled={isLoading} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      

    </div>
  );
};

export default QuizCreation;
