import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card, CardTitle } from '@/components/ui/card';

type Props = {}

const Personal = (props: Props) => {
  return (
    <Card className='dark:bg-gray-950'>
        <CardTitle className="text-2xl font-bold text-center py-2">Personal Development Courses</CardTitle>

    <div className="container my-12 mx-auto px-4 md:px-12" id="coursecard">

                <div>
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/patient-who-is-brain-scanned-his-activity-is-seen-big-screen-neurology-headset_482257-31639.jpg?w=740&t=st=1692882697~exp=1692883297~hmac=358afec991784a129302f113771192b89168a820e98d2cd390691f140cd81b0c" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                           Neuro-Linguistic Programming
                                        </span>
                                    </h1>
                                  
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                    
                                    {/* LINK EZONA'S PAGES */}
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/agency-young-adult-profession-stressed-black_1134-1279.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                         Stress Management
                                        </span>
                                    </h1>
                                   
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060259.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=ais" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Communication Skills
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/abstract-science-background_1048-5811.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=ais" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Emotional Intelligence
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/think-education-inspire-learn-diagram-concept_53876-144384.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Critical Thinking
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline hover:underline text-black">

                                    </span>

                                </footer>

                            </article>

                        </div>
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/young-woman-practicing-yoga-relaxation-exercises-meditating-rock-beach-copy-space_637285-5473.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline hover:underline text-black">
                                            Mindful Courses
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</a>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div>

                           
                    </div>
                </div>
    </div>
    </Card>
  )
}

export default Personal