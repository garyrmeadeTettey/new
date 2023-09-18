import React from 'react'
import ScienceCourses from '@/components/courses/science/science'
import CourseListBar from '@/components/courses/sidebar/courseListBar'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">SCIENCE COURSES</CardTitle>
                <CardDescription>
                    Free Courses
                </CardDescription>
            </CardHeader>
    <div className="flex">
       

    <div className="w-1/4">
      <CourseListBar />
    </div>
    <div className="w-3/4">
      <ScienceCourses />
    </div>
  </div>
  </>
  )
}

export default page