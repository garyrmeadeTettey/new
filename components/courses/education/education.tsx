import Link from 'next/link'
import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card } from '@/components/ui/card';

type Props = {}

const education = (props: Props) => {
  return (
    <Card className='dark:bg-gray-950'>
    <div className="container my-12 mx-auto px-4 md:px-12" id="coursecard">

        <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg" id="coursemain">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/flat-lay-travel-set-with-compass-maps_23-2149554722.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Geography
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/Geography/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        
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
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-128059.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                             Psychology
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/Psychology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                    </footer>

                </article>

            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/laptop-which-there-is-world-people-drawn_1232-288.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Sociology
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/Sociology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                    </footer>

                </article>

            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/binoculars-magnifying-glass-map_23-2147770898.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                History
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/history/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                    </footer>

                </article>

            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9086.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=sph" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Philosophy
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/philosophy/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                        </span>

                    </footer>

                </article>

            </div>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/african-american-blogger-reviewing-studio-light-camera_482257-26748.jpg?w=900&t=st=1692786329~exp=1692786929~hmac=aea4e439bc7bf2b2717b04b16d897c0f86c98429cb255857de63b83c6632d76a" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Media Studies
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/mediaStudies/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                </article>

            </div>

            {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/aunt-nephew-homework-together_158595-7511.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Home Science
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/homeScience/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                        </span>

                    </footer>

                </article>

            </div>

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                <article className="overflow-hidden rounded-lg shadow-lg">

                    <div>
                        <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/caucasian-network-developer-pointing-out-high-usage-processing-power-mainframe-grid-african-american-programmer-helping-coworker-solve-overloaded-system-storage-space_482257-40526.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=ais" />
                    </div>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            <span className="no-underline dark:text-white hover:underline text-black">
                                Informatics Practices
                            </span>
                        </h1>
                        
                    </header>
                    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                    <div className="card-text flex mt-4 space-x-3 md:mt-6">
                    <Link href="/Art&humanities/informaticsPractices/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                    </div>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                    </footer>

                </article>

            </div>        */}
        </div>
    </div>
    </Card>
  )
}

export default education