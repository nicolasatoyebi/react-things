import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 return (
  <div>
    <Button />
    <Button />
    <h2>Hello</h2>
    <Heading />
    <Button />
    <Button />
    <Heading />
    <Button />
    <h3>How are you today?</h3>
    <Heading />
  </div>
 )
}

function Button(){
  return(
    <button>Thank you</button>
  )
}

function Heading(){
  return (
    <div>
      <h2>Some heading</h2>
    </div>
  )
}



export default App
