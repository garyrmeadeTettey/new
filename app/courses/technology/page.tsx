import React from 'react'
import TechCourses from '@/components/courses/technology/technology'
import CoursesList from '@/components/courses/sidebar/courseListBar'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">TECH COURSES</CardTitle>
      <CardDescription>
        Free Courses
      </CardDescription>
    </CardHeader>
    <div className="flex"> 
      <div className="w-1/4">
        <CoursesList />
      </div>
      <div className="w-3/4">
        <TechCourses />
      </div>
  </div>
  </>
  )
}

export default page