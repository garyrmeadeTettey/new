import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card, CardTitle } from '@/components/ui/card';

type Props = {}

const technology = (props: Props) => {
  return (
    <Card className='dark:bg-gray-950'>
        <CardTitle className="text-2xl font-bold text-center py-2">Technology Courses</CardTitle>
    <div className="container my-12 mx-auto px-4 md:px-12" id="coursecard">
                              
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?t=st=1691765186~exp=1691765786~hmac=fcdbedbc780e650a48d100fe5a9191627a70e54f48824ddac9216041bcf2508e" />
                                </div>


                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Computer programming
                                        </span>
                                    </h1>
                                    
                                </header>
                              
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                    </div>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                    </footer>

                                </article>

                            </div>
                        

                               
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/internet-communication_24877-51945.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
                                </div>


                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Computers and the Internet
                                        </span>
                                    </h1>
                                    
                                </header>
                              
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                    </div>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                    </footer>

                                </article>

                            </div>

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <div>
                                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1691765665~exp=1691766265~hmac=668c2b6b025327e721ec5de1e20c6e21bd7861a3c05a8b94508979b26c5b0643" />
                                    </div>


                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Programming
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

          

                                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                    </div>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                    </footer>

                                </article>

                            </div>

            
         

    </div>
    </Card>
  )
}

export default technology