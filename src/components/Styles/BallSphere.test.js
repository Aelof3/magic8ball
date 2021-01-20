import React from 'react'
import ReactDOM from 'react-dom'
import BallSphere from './BallSphere'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BallSphere />, div)
  ReactDOM.unmountComponentAtNode(div)
})
