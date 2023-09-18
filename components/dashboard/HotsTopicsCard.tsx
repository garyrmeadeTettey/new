import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WordCloud from "../WordCloud";
import { drizzle } from "drizzle-orm/postgres-js";
import { Client } from "@clerk/nextjs/server";
import { client, db } from "@/lib/db";
// import { prisma } from "@/lib/db";
import * as schema from '@/lib/db/schema';
type Props = {};

const HotTopicsCard = async (props: Props) => {
//   const topics = await prisma.topic_count.findMany({});
//   const formattedTopics = topics.map((topic) => {
//     return {
//       text: topic.topic,
//       value: topic.count,
//     };
//   });
// const users = await db.query.users.findMany();  

// const db = drizzle(client, { schema });
 
// const topics = await db.query.topic_count.findMany({})
//   const formattedTopics = topics.map((topic) => {
//     return {
//       text: topic.topic,
//       value: topic.count,
//     };
//   });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;