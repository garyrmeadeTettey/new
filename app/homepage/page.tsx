import React from 'react'
import Cards from "@/components/homepage/Card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Footer from '@/components/homepage/Footer';
import Hero from '@/components/homepage/Hero';
import Values from '@/components/homepage/Value';
import Teacher from '@/components/homepage/Teachers';
import Navbar from '@/components/homepage/Navbar';
type Props = {}

export const metadata = {
    title: 'BetterMan | Home',
    description: 'Browse through what we offer and hw we offer it.',
};

const page: React.FC<Props> = async (props: Props) => {
    const { userId } = await auth();
    const isAuth = !!userId;

    if(!isAuth){
        redirect('/')
    }

  
  return (
    <div className="col-span-4 bg-[url('/assets/next.svg')]">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">WELCOME TO BETTER-MAN</CardTitle>
                <CardDescription>
                    The best and simple online learning platform.
                </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
                <Hero/>
                <Values/>
                <Cards />
                <Teacher/>
            </CardContent>
            <Footer/>
        </div>
  )
}

export default page