import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import DashboardRoute from './DashboardRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HashRouter>
    <DashboardRoute />
</HashRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
