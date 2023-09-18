'use client'
import React, { Component } from 'react';
import { CardTitle, CardDescription, Card, CardContent } from '../ui/card';
import Image from 'next/image';
//import Title from './Title';

const feedbackData = [
    {
      id: 1,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'John Doe',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 2,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'Jane Smith',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
    {
      id: 3,
      userImage: '/assets/technology.jpg', // Replace with the image URL
      userName: 'Alice Johnson',
      feedbackText: 'This platform for online learning is revolutionary. It is a beacon for knowledge searchers with simple navigation and excellent information.',
    },
  ];
class Cards extends Component{
    render(){
        return(

            <Card className='dark:bg-gray-800 bg-cover bg-center relative"'>

                <CardTitle className="text-2xl font-bold text-center">FEEDBACK</CardTitle>
                <CardDescription className="text-center">What are other learners saying.</CardDescription>

                {/* <div>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div className="rounded-full overflow-hidden w-40 h-32 items-center">
                                    <Image quality={100} width={500} height={300} alt="Placeholder" className="block h-auto w-full" src={"/assets/mathematics.jpg"} />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Mathematics
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">Improve your math with our free platform featuring notes, and practice tests. Struggling with Math? Our website offers free resources to help you succeed. Study for free. Online math</p>                                                        
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">

                                    
                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div className="rounded-full overflow-hidden w-40 h-32 items-center">
                                    <Image quality={100} width={500} height={300} alt={"Placeholder"} className="block h-auto w-full" src={"/assets/sciences.jpg"} />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Science
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">Improve your math with our free platform featuring notes, and practice tests. Struggling with Math? Our website offers free resources to help you succeed. Study for free. Online math</p>
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">

                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div className="rounded-full overflow-hidden w-40 h-32 items-center">
                                    <Image quality={100} width={500} height={300}   alt={"Placeholder"} className="block h-auto w-full" src={"/assets/technology.jpg"} quality={100} />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Technology
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">
                                This online learning environment is revolutionary. 
                                Its rich collection of free instructional materials 
                                enables students at all levels. It serves as a guide 
                                for those looking for information because to its clear 
                                navigation and excellent content. A must-see for anybody 
                                interested in learning and a monument 
                                to accessible education.
                                </p>
            
                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="block h-auto w-full" src="../assets/enginering.jpg" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Enginering
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">Improve your math with our free platform featuring notes, and practice tests. Struggling with Math? Our website offers free resources to help you succeed. Study for free. Online math</p>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">

                                    
                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="block h-auto w-full" src="../assets/finance.jpg" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Financial Literacy
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">Improve your math with our free platform featuring notes, and practice tests. Struggling with Math? Our website offers free resources to help you succeed. Study for free. Online math</p>
                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="block h-auto w-full" src="../assets/business.jpg" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Business
                                        </span>
                                    </h1>
                                </header>

                                <p className="card-text text-grey-darker">Improve your math with our free platform featuring notes, and practice tests. Struggling with Math? Our website offers free resources to help you succeed. Study for free. Online math</p>


                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">

                                </footer>

                            </article>

                       </div>
                       
                    </div>
                    
                </div> */}
                <CardContent className='mt-4'>
                    <div className="mt-4 feedback-card-container flex justify-center">
                        {feedbackData.map((feedback) => (
                            <div
                            key={feedback.id}
                            className=" transform hover:scale-105 hover:bg-gray-200 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:hover:shadow-2xl transition-transform dark:bg-gray-950 feedback-card mx-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-transform duration-200 hover:scale-105"
                            >
                            <div className="user-image">
                                <img src={feedback.userImage} alt={feedback.userName} />
                            </div>
                            <div className="user-info">
                                <h3>{feedback.userName}</h3>
                                <p>{feedback.feedbackText}</p>
                            </div>
                            </div>
                        ))}
                        <style jsx>{`
                            .feedback-card-container {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            }

                            .feedback-card {
                            border-radius: 8px;
                            margin: 10px;
                            padding: 20px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                            width: 100%;
                            transition: transform 0.2s ease-in-out;
                            }

                            .feedback-card:hover {
                            transform: scale(1.05);
                            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                            }

                            .user-image img {
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            object-fit: cover;
                            }

                            .user-info {
                            margin-top: 10px;
                            }

                            h3 {
                            font-size: 1.2rem;
                            margin-bottom: 5px;
                            }

                            p {
                            font-size: 1rem;
                            }

                            @media (min-width: 640px) {
                            .feedback-card {
                                width: 45%;
                            }
                            }

                            @media (min-width: 768px) {
                            .feedback-card {
                                width: 30%;
                            }
                            }

                            @media (min-width: 1024px) {
                            .feedback-card {
                                width: 23%;
                            }
                            }

                            @media (min-width: 1280px) {
                            .feedback-card {
                                width: 20%;
                            }
                            }
                        `}</style>
                    </div>

                </CardContent>
            </Card>
                          
        );
    }
}

export default Cards;