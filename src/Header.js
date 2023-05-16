import React from 'react'
import Footer from './Footer'

export default function Header({name, age,}) {
  return (
    <div>
      <h1>welcome, {name}, age={age}, </h1>
      <Footer/>
    </div>
  )
}   