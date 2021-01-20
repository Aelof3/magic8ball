import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import AskQuestionRoute from './AskQuestionRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HashRouter>
    <AskQuestionRoute />
</HashRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
