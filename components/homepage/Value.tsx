import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
//import Title from "./Title";

const Values = () => {
  return (
    <div className=" mx-auto py-20">

      <CardTitle className="text-2xl font-bold text-center">WHY CHOOSE US?</CardTitle>
      <CardDescription className="text-center">Our values.</CardDescription>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Custom-Paced</p>
          <p className="text-gray-500 text-center">
          In our educational approach, we prioritize custom-paced learning, 
          recognizing that 
          everyone&apos;s abilities and comfort levels vary. 
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Quality control</p>
          <p className="text-gray-500 text-center">
          We ensure that products meet standards, 
          preventing defects and ensuring customer satisfaction through 
          rigorous inspection and testing.
          </p>
        </div> 
        
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Progress analysis</p>
          <p className="text-gray-500 text-center">
          We asses performance to track growth and make informed decisions for continuous improvement and success.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Values;