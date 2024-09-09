import CourseCell from 'src/components/Course/CourseCell'

type CoursePageProps = {
  id: number
}

const CoursePage = ({ id }: CoursePageProps) => {
  return <CourseCell id={id} />
}

export default CoursePage
