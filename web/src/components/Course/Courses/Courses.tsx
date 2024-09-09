import type {
  DeleteCourseMutation,
  DeleteCourseMutationVariables,
  FindCourses,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Course/CoursesCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const CoursesList = ({ courses }: FindCourses) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCourseMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{truncate(course.id)}</td>
              <td>{truncate(course.title)}</td>
              <td>{truncate(course.body)}</td>
              <td>{timeTag(course.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.course({ id: course.id })}
                    title={'Show course ' + course.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCourse({ id: course.id })}
                    title={'Edit course ' + course.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete course ' + course.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(course.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoursesList
