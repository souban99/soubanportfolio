import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Service from './components/Service';
import About from './components/About';
import MyWork from './components/MyWork';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <>
        <header>{<Header />}</header>
        <section className="intro" id="home">{<Intro />}</section>
        <section className="my-services" id="services">{<Service />}</section>
        <section className="about-me" id="about">{<About />}</section>
        <section className="my-work" id="work">{<MyWork />}</section>
        <footer>{<Footer />}</footer>
      </>
    );
  }
}

export default App;