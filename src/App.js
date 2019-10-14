import React, {Component} from 'react';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Aux from './hoc/auxilary';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  portfolioRef = React.createRef();
  aboutRef = React.createRef();
  contactRef = React.createRef(); 


  render(){

  return (
    <Aux>
    <Router>
    <div className="port__container">
        <Header ref={{
          aboutRef: this.aboutRef, 
          portfolioRef: this.portfolioRef,
          contactRef: this.contactRef
          }} />
        <Projects ref={this.portfolioRef} />
        <About ref={this.aboutRef} />
        <Contact ref={this.contactRef} />
        <Footer />
    </div>
    </Router>
    </Aux>

  );}
}

export default App;
