import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BaseLayout } from './BaseLayout'

export default {
  title: 'MUI/Layouts/Dashboard',
  component: BaseLayout,
  parameters: {},
} as ComponentMeta<typeof BaseLayout>

const Template: ComponentStory<typeof BaseLayout> = args => (
  <BaseLayout {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  children: <>Children</>,
}
