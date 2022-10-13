import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar.jsx'
import News from './components/News.jsx'
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    )
  }
}
