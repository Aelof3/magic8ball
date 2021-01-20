import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import { HashRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HashRouter>
    <Header />
</HashRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
