import React from 'react'
import ReactDOM from 'react-dom'
import QuestionsFromUser from './QuestionsFromUser'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<QuestionsFromUser />, div)
  ReactDOM.unmountComponentAtNode(div)
})
