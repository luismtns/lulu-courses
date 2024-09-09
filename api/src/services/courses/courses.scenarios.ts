import type { Prisma, Course } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: { data: { title: 'String', body: 'String' } },
    two: { data: { title: 'String', body: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Course, 'course'>
