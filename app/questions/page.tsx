import React, { Suspense } from 'react'
import Questions from '@/components/Questions'

type Props = {}
function SearchBarFallback() {
  return <>placeholder</>
}
const page = (props: Props) => {
  return (
    <div>
        {/* <Suspense fallback={<SearchBarFallback />}>
          <Questions />
        </Suspense> */}
          <Questions />
    </div>
  )
}

export default page