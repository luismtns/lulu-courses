export const schema = gql`
  type Course {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    courses: [Course!]! @requireAuth
    course(id: Int!): Course @requireAuth
  }

  input CreateCourseInput {
    title: String!
    body: String!
  }

  input UpdateCourseInput {
    title: String
    body: String
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course! @requireAuth
    updateCourse(id: Int!, input: UpdateCourseInput!): Course! @requireAuth
    deleteCourse(id: Int!): Course! @requireAuth
  }
`
