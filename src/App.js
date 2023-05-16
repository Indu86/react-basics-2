import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function App() {
  return (
    <div>
      <h1>App</h1>
      <h1>Component1</h1>
      <header/> <h1>Component1</h1>
      <h1>Component1</h1>
      <Header name={'Elon musk'} age={41} ceoBoollean={false} />
      <Footer somepropdata={'my data'}/>
    </div>
  )
}
