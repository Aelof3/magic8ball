import React from 'react'
import ReactDOM from 'react-dom'
import Magic8ball from './Magic8ball'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Magic8ball />, div)
  ReactDOM.unmountComponentAtNode(div)
})
