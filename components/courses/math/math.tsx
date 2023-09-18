import { Card, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import React from 'react'
import { FaClock } from 'react-icons/fa';

type Props = {}

const math = (props: Props) => {
  return (
    <Card className='dark:bg-gray-950'>
        <CardTitle className="text-2xl font-bold text-center py-2">Mathematics Courses</CardTitle>
    <div className="container my-12 mx-auto px-4 md:px-12" id="coursecard">


    <div className="flex flex-wrap -mx-1 lg:-mx-4">

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/colleagues-making-business-plan-meeting-close-up_176420-5105.jpg?w=740&t=st=1692783789~exp=1692784389~hmac=94117eeef9a92dfbb8df10be4824e819acd724b2457427c3834781668bc0c0e9" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Algebra
                    </span>
                </h1>
                
            </header>
            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE' /> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
            
            
            

            {/* <Link href="/math/algebra/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Info
            </Link>
                
            <Link href="../../CoursesPage/LearningUnits/tutorial" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                Start Learning
            </Link> */}
            <div className="flex space-x-4">
                <Link href="/courses/moreInfo/math/algebra" className="flex-1">
                    <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    More Info
                    </button>
                </Link>

                <Link href="../../../courses/units/math/algebra" className="flex-1">
                    <button className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    Start Learning
                    </button>
                </Link>
            </div>


        </article>

    </div>

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/top-view-kid-cheating-school_23-2150105004.jpg?w=740&t=st=1692783747~exp=1692784347~hmac=07ce9e9b8d006f046502a4222b5240ad90e3444c98429226a20ae53edf923091" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Fractions
                    </span>
                </h1>
                
            </header>
            
        
            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock  color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/fractions/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">


            </footer>

        </article>

    </div>

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/learning-education-mathematics-calculation-teaching-concept_53876-167099.jpg?w=740&t=st=1692783658~exp=1692784258~hmac=b2de0eca6befa0ba474f6289ba6ed99daf5dacab891ca5bdc5aab1f8a849dd94" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                       Trigonometry
                    </span>
                </h1>
                
            </header>

            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/courses/moreInfo/math/algebra/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                <a href="/courses/units/math/algebra" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">


            </footer>

        </article>

    </div>
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/geometry-education-blue-background-vector-frame-disruptive-education-digital-remix_53876-114094.jpg?w=740&t=st=1692783304~exp=1692783904~hmac=bdfca1826ff369d27db272250ede3e1b7efedaebda93839e24a74a2daa5d66dc" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Basic geometry and measurement
                    </span>
                </h1>
                
            </header>

            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/geometry&measurements/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">


            </footer>

        </article>

    </div>

    {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/geomoetrical-cubes-paper_53876-42506.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Trigonometry
                    </span>
                </h1>
                
            </header>
            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/trigonometry/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/top-view-workmates-talking-about-bar-chart_1098-338.jpg?w=740&t=st=1692783555~exp=1692784155~hmac=2dd8f3a5b579559b20f166a8964583f3aa4498342341eb06b74695fceb117e31" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Statistics and Probability
                    </span>
                </h1>
                
            </header>

            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/stats&Propability/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">


            </footer>

        </article>

    </div>

     {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        <article className="overflow-hidden rounded-lg shadow-lg">

            <div>
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-vector/mathematic-science-images-set_1284-11215.jpg?w=740&t=st=1692783384~exp=1692783984~hmac=64ada75659f2464e5e29b1f0024ef899a48012267dcdd6fded0fcab94fde6973" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Precalculus
                    </span>
                </h1>
                
            </header>

            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>
            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/preCalculas/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
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
                <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/stack-books-with-pencil-holder-glasses-against-chalkboard_181624-38995.jpg?w=740&t=st=1692783851~exp=1692784451~hmac=d991a932d94ac2a71a9fca885a1c43b838f937384f87354eb44965d1973c5436" />
            </div>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <span className="no-underline dark:text-white hover:underline text-black">
                        Polynomials
                    </span>
                </h1>
                
            </header>
          
            <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

            <div className="card-text flex mt-4 space-x-3 md:mt-6">
            <Link href="/math/polynomial/MoreInfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
            </div>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">


            </footer>

        </article>

    </div> */}

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

    <article className="overflow-hidden rounded-lg shadow-lg">

    <div>
    <img alt="Placeholder" className="blockimages" src="https://img.freepik.com/free-photo/calculator-with-pen-business-plan-paper_23-2147965727.jpg?size=626&ext=jpg&ga=GA1.1.1889540053.1689851364&semt=ais" />
    </div>

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    <h1 className="text-lg">
    <span className="no-underline dark:text-white hover:underline text-black">
    Multivariable Calculus
    </span>
    </h1>

    </header>
    <ul><li><div  className='clockdisplay ml-4'> <div className='clockicon'> <FaClock color='71AEAE'/> </div> <p className='clocktext' > 2-4 hrs</p></div></li></ul>

    <div className="card-text flex mt-4 space-x-3 md:mt-6">
    <Link href="/math/multiCalculas/MoreInfo"className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More Info</Link>
    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Start Learning</a>
    </div>

    </article>

    </div> 


</div>


</div>

    </Card>
  )
}

export default math