import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from './layouts/BlogLayout/BlogLayout'

import { useAuth } from './auth'
import ApplicationLayout from './layouts/ApplicationLayout/ApplicationLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ApplicationLayout}>
        <Set wrap={ScaffoldLayout} title="Courses" titleTo="courses" buttonLabel="New Course" buttonTo="newCourse">
          <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
          <Route path="/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
          <Route path="/courses/{id:Int}" page={CourseCoursePage} name="course" />
          <Route path="/courses" page={CourseCoursesPage} name="courses" />
        </Set>
      </Set>

      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
