import 'unfetch/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './components/App/App'
import './setup-icons'
import './index.css'

ReactDOM.render(
  <HashRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </HashRouter>,
  document.getElementById('root'),
)

