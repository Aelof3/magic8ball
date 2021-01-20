import React from 'react'
import ReactDOM from 'react-dom'
import RegistrationForm from './RegistrationForm'
import { HashRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HashRouter>
    <RegistrationForm />
</HashRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
