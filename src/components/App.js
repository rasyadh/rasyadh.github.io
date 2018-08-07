import React, { Component } from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Experience from './Experience';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
import 'bulma/css/bulma.min.css';
import './app.css';

class App extends Component {
    render() {
        return (
            <main>
                <Hero />
                <Intro />
                <Experience />
                <Works />
                <Contact />
                <Footer />
            </main>
        )
    }
}

export default App;