import DetailsDialog from "@/components/DetailsDialog";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotsTopicsCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";


import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizmify",
  description: "Quiz yourself on anything!",
};

const Dashboard = async (props: Props) => {
 

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* <DetailsDialog /> */}
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        {/* <HotTopicsCard /> */}
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dashboard;