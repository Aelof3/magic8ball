import React from 'react'
import ReactDOM from 'react-dom'
import QuestionsFromRecent from './QuestionsFromRecent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<QuestionsFromRecent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
