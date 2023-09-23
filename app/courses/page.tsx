import React from 'react'
import CourseListBar from '../../components/courses/sidebar/courseListBar'
import  MathCourse from '../../components/courses/math/math'

import Technology from '@/components/courses/technology/technology'
import ScienceCourses from '@/components/courses/science/science'
import LifeSkillCourses from '@/components/courses/lifeskills/lifeskills'
import PersonalDev from '@/components/courses/personalDev/personal'



import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">COURSES DASHBOARD</CardTitle>
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
      
      <Technology />
      
      <MathCourse />

      <LifeSkillCourses />

      <PersonalDev />
    </div>
  </div>
  </>
  )
}

export default page