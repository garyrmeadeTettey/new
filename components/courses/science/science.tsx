import Link from 'next/link'
import React from 'react'
import { FaClock } from 'react-icons/fa';
import CoursesList from '../sidebar/courseListBar';
import { Card, CardTitle } from '@/components/ui/card';

type Props = {}

const science = (props: Props) => {
  return (
    <Card className='dark:bg-gray-950'>
        <CardTitle className="text-2xl font-bold text-center py-2">Science Courses</CardTitle>
    <div className="container  mx-auto  md:px-12" id="coursecard">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/dna_1048-3281.jpg?w=740&t=st=1691760227~exp=1691760827~hmac=04268fc6f7a82e7ce02f6aff3d38c1e4796b35dc07cf4a203bad405160754e19" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Middle School Biology
                                        </span>
                                    </h1>
                                  
                                </header>
                              
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                </footer>

                            </article>

                        </div>

                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" >

                            <article className="overflow-hidden rounded-lg shadow-lg" >

                                <div> 
                                    <img alt="Placeholder" className="blockimages" src='https://img.freepik.com/free-vector/satellite-earth-space-scene_1308-104266.jpg?w=826&t=st=1693050074~exp=1693050674~hmac=eb6989ce4db565a4bf425733809635b9210683209ed57c5b42e8088835bf44a2' />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h2 className="text-m">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Middle school Earth & Space science
                                        </span>
                                    </h2>
                                    
                                </header>
                               
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock  color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/earth&Space/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div> */}

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/executive-with-light-bulb-surrounded-by-icons_1232-162.jpg?w=740&t=st=1691760409~exp=1691761009~hmac=071bab6700f0a1f507d5069573738cb60ec7d37a20200979eb75d97b8868a770" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Middle School physics
                                        </span>
                                    </h1>
                                    
                                </header>
                              
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/physics/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div>
                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/dna-closely_1048-2632.jpg?size=626&ext=jpg&ga=GA1.2.1889540053.1689851364&semt=sph" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Highschool Biology
                                        </span>
                                    </h1>
                                    
                                </header>
                                  
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/highSchoolBiology/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div>

                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/man-using-laptop-emerging-graphics_1232-314.jpg?w=740&t=st=1691760483~exp=1691761083~hmac=9e97ea84f160bd47219015af78bdef4a9da1f6685aa6648c0880643c46f8d024" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Highschool Physics
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/highSchoolPhysics/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/women-experiment-sprout_23-2148939069.jpg?w=740&t=st=1691760548~exp=1691761148~hmac=5ba196daf0e23961b8d1b09c81c6915ef0fc9b8fe81f5eedefeb996220ce8318" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Enviromental Science
                                        </span>
                                    </h1>
                                   
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/environmentalScience/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div> */}

                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src='https://img.freepik.com/free-photo/science-experiment-with-plant_144627-13106.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais' />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Organic Chemistry
                                        </span>
                                    </h1>
                                   
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?w=900&t=st=1691760958~exp=1691761558~hmac=71a2151995617204c3938637902a84d064bfc5da43564e5990cc8b22af344ed7" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Health and medicine
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">


                                </footer>

                            </article>

                        </div>

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/space-background-with-telescope_1284-4407.jpg?w=740&t=st=1691761011~exp=1691761611~hmac=074b3a61fbf9b257db62f6042b879828e088497ef1db4166728aac0abd1370eb" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Cosmology and astronomy
                                        </span>
                                    </h1>
                                    
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/molecular-structure-molecular-structural-coding-illustration_1284-52871.jpg?w=740&t=st=1691761166~exp=1691761766~hmac=29c8def20f9e85dccdc352e8535b83818f21266b79f1086e26064aefda7025c5" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Chemistry Library
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg?w=740&t=st=1691761240~exp=1691761840~hmac=0cf131c390c729a2f2aa3fc219777bc4a34f5709daf157989ad22f4c9ed5bad1" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Physics Library
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                                    </span>

                                </footer>

                            </article>

                        </div>
{/*  */}
                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/laboratory-worker-examining-substance-petri-dish-while-conducting-research_181624-1246.jpg?w=360&t=st=1691761324~exp=1691761924~hmac=83acc3c176a32e1cdb0136a6a7cdc45955831a260e1eb8215049d26bec16ddb7" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Organic Chemistry - ClassName 11
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                                    </span>

                                </footer>

                            </article>

                        </div> */}

                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <article className="overflow-hidden rounded-lg shadow-lg">

                            <div>
                                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/atomic-science-technology-background-vector-border-blue-neon-style-with-blank-space_53876-125999.jpg?w=740&t=st=1691761240~exp=1691761840~hmac=0cf131c390c729a2f2aa3fc219777bc4a34f5709daf157989ad22f4c9ed5bad1" />
                            </div>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <span className="no-underline dark:text-white hover:underline text-black">
                                    Physics Library
                                    </span>
                                </h1>
                            </header>
                            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

                            <div className="card-text flex mt-4 space-x-3 md:mt-6">
                            <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/doctors-wearing-vr-simulation-with-hologram-medical-technology_53876-98566.jpg?w=740&t=st=1691761566~exp=1691762166~hmac=06cc424be4f10fb9ab38cdc2aaff2f87c20232a40722db95d710fbbe95b65ce2" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Electromagnetism
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/happy-woman-looking-new-glasses-optometrist_23-2148196686.jpg?t=st=1691761613~exp=1691762213~hmac=f03c7755a73b52f5c10a6c25b4bab0d1f97cd4057851f68f4ccdb8280e4133cb" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Optics Essentials
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                                    </span>

                                </footer>

                            </article>

                        </div>


                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/3d-medical-background-with-abstract-virus-cells_1048-17686.jpg?w=740&t=st=1691761689~exp=1691762289~hmac=f6ef5856fe36438bf4aaa6596cef355c3410e42ecf6453c4a8b960c132318c65" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Applied Biology - ClassName 12
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                                    </span>

                                </footer>

                            </article>

                        </div> */}

                        {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                            <article className="overflow-hidden rounded-lg shadow-lg">

                                <div>
                                    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/experiment-biotechnology-with-chemistry-science_23-2150365017.jpg?w=740&t=st=1691761773~exp=1691762373~hmac=d33c9e32e87634851337276d0eb93798b3115bee11ff2d0a9eff4eff5ae70771" />
                                </div>

                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <span className="no-underline dark:text-white hover:underline text-black">
                                        Physical Chemistry - ClassName 11
                                        </span>
                                    </h1>
                                </header>
                                <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>


                                <div className="card-text flex mt-4 space-x-3 md:mt-6">
                                <Link href="/science/biology/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
                                </div>

                                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                    <span className="flex items-center no-underline dark:text-white hover:underline text-black">

                                    </span>

                                </footer>

                            </article>
                        </div>  */}
                    </div>
    </div>
    </Card>
  )
}

export default science