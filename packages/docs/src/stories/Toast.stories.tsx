import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@fagnersro-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{ display: 'flex', flexDirection: 'row', gap: '$2', padding: '$10', }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
