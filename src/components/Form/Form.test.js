import React from 'react'
import ReactDOM from 'react-dom'
import {Label,Input,Required,Textarea} from './Form'

it('Label renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Label />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Input renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Input />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Required renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Required />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Textarea renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Textarea />, div)
  ReactDOM.unmountComponentAtNode(div)
})
