import type { FindCourses, FindCoursesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Courses from 'src/components/Course/Courses'

export const QUERY: TypedDocumentNode<FindCourses, FindCoursesVariables> = gql`
  query FindCourses {
    courses {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No courses yet. '}
      <Link to={routes.newCourse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCourses>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  courses,
}: CellSuccessProps<FindCourses, FindCoursesVariables>) => {
  return <Courses courses={courses} />
}
