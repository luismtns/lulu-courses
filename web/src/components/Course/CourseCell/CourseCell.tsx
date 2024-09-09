import type { FindCourseById, FindCourseByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Course from 'src/components/Course/Course'

export const QUERY: TypedDocumentNode<FindCourseById, FindCourseByIdVariables> =
  gql`
    query FindCourseById($id: Int!) {
      course: course(id: $id) {
        id
        title
        body
        createdAt
      }
    }
  `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Course not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCourseByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  course,
}: CellSuccessProps<FindCourseById, FindCourseByIdVariables>) => {
  return <Course course={course} />
}
