import { render } from '@redwoodjs/testing/web'

import ApplicationLayout from './ApplicationLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ApplicationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ApplicationLayout />)
    }).not.toThrow()
  })
})
