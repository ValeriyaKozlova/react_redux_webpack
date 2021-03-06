import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './app.less'
import Main from './main/Main'

export default function App() {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  )
}


