import EditCourseCell from 'src/components/Course/EditCourseCell'

type CoursePageProps = {
  id: number
}

const EditCoursePage = ({ id }: CoursePageProps) => {
  return <EditCourseCell id={id} />
}

export default EditCoursePage
