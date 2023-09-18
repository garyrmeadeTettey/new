'use client'
import React from "react";
import Navbar from "./Navbar";
import { useRouter } from 'next/navigation';
import Slideshow from "./Slider";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";


const Hero = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/dashboard")
  }
  return (
   
    <Card className="area dark:bg-gray-800">
      <div className="container  bg-cover bg-center relative">
      <div className="lg:flex ">
        <div className="lg:w-1/2 py-16 md:py-20 lg:py-32">
          <p className='main-para'>
            A non-governmental organization (NGO) dedicated to empowering 
            and developing our future stars. At Better-Man, we think that every child has 
            the potential to shine brightly in the world. Our purpose is to make the future a 
            better place by focusing on improving mental and educational skills, nurturing young 
            brains, and cultivating a compassionate and inclusive community.
          </p>
          <Link href='/dashboard'>
            <Button variant="default" className="ml-8 dark:hover:bg-gray-700 hover:bg-gray-400" onClick={handleSubmit}>Try Out QuizMify</Button>
          </Link>
        </div>
    
        <div className="lg:w-1/2">
          <div className=" mt-8 md:mt-12 lg:mt-16">
            <Slideshow />
          </div>
        </div>
      </div>
      </div>
      <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
      
    </Card>
  

       
  );
};

export default Hero;