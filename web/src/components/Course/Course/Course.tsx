import type {
  DeleteCourseMutation,
  DeleteCourseMutationVariables,
  FindCourseById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_COURSE_MUTATION: TypedDocumentNode<
  DeleteCourseMutation,
  DeleteCourseMutationVariables
> = gql`
  mutation DeleteCourseMutation($id: Int!) {
    deleteCourse(id: $id) {
      id
    }
  }
`

interface Props {
  course: NonNullable<FindCourseById['course']>
}

const Course = ({ course }: Props) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
      navigate(routes.courses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCourseMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Course {course.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{course.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{course.title}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{course.body}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(course.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCourse({ id: course.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(course.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Course
