import type {
  CreateCourseMutation,
  CreateCourseInput,
  CreateCourseMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CourseForm from 'src/components/Course/CourseForm'

const CREATE_COURSE_MUTATION: TypedDocumentNode<
  CreateCourseMutation,
  CreateCourseMutationVariables
> = gql`
  mutation CreateCourseMutation($input: CreateCourseInput!) {
    createCourse(input: $input) {
      id
    }
  }
`

const NewCourse = () => {
  const [createCourse, { loading, error }] = useMutation(
    CREATE_COURSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Course created')
        navigate(routes.courses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCourseInput) => {
    createCourse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Course</h2>
      </header>
      <div className="rw-segment-main">
        <CourseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCourse
