'use client'
import React from "react";
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CourseToggle = () => {
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Set the showButtons state based on screen width
      setShowButtons(window.innerWidth > 640); // Adjust the width as needed
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card>
    <div className="mr-8 mt-4">
      {showButtons ? (
        <div className="flex flex-col space-y-2">
          <Link href="/courses">
            <button className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2">Science</button>
          </Link>
          {/* Add other course buttons here */}
        </div>
      ) : (
        <button
          onClick={() => setShowButtons(true)}
          className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2"
        >
          S
        </button>
      )}
    </div>
    <div className="mr-8 mt-4">
      {showButtons ? (
        <div className="flex flex-col space-y-2">
          <Link href="/courses/units/math">
            <button className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2">Technology</button>
          </Link>
          {/* Add other course buttons here */}
        </div>
      ) : (
        <button
          onClick={() => setShowButtons(true)}
          className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2"
        >
          S
        </button>
      )}
    </div>
    <div className="mr-8 mt-4">
      {showButtons ? (
        <div className="flex flex-col space-y-2">
          <Link href="/courses">
            <button className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2">Engineering</button>
          </Link>
          {/* Add other course buttons here */}
        </div>
      ) : (
        <button
          onClick={() => setShowButtons(true)}
          className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2"
        >
          S
        </button>
      )}
    </div>
    <div className="mr-8 mt-4">
      {showButtons ? (
        <div className="flex flex-col space-y-2">
          <Link href="/courses">
            <button className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2">Mathematics</button>
          </Link>
          {/* Add other course buttons here */}
        </div>
      ) : (
        <button
          onClick={() => setShowButtons(true)}
          className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2"
        >
          S
        </button>
      )}
    </div>
    <div className="mr-8 mt-4">
      {showButtons ? (
        <div className="flex flex-col space-y-2">
          <Link href="/courses">
            <button className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2">Life Skills</button>
          </Link>
          {/* Add other course buttons here */}
        </div>
      ) : (
        <button
          onClick={() => setShowButtons(true)}
          className="btnhead hover:bg-gray-300-600 dark:hover:bg-gray-900 p-2"
        >
          S
        </button>
      )}
    </div>
    <div className="mr-8 mt-4">
    <div className="text-center ml-4">
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3">Life Skills</AccordionTrigger>
    <AccordionContent>
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-3">Life Skills</button>
    </AccordionContent>
    <AccordionContent>
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-3">Life Skills</button>
    </AccordionContent>
    <AccordionContent>
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-3">Life Skills</button>
    </AccordionContent>
    <AccordionContent>
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-3">Life Skills</button>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
    </div>
    

    </Card>
  );
};

export default CourseToggle;
