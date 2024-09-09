import type { Meta, StoryObj } from '@storybook/react'

import ApplicationLayout from './ApplicationLayout'

const meta: Meta<typeof ApplicationLayout> = {
  component: ApplicationLayout,
}

export default meta

type Story = StoryObj<typeof ApplicationLayout>

export const Primary: Story = {}
