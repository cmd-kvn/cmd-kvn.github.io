import React, { Component } from 'react';

import Aside from './components/Aside';
import Main from './components/Main/Main';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'headshot.JPG',
        };
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.setState({ src: 'email-icon.png' });
    }
    handleMouseLeave() {
        this.setState({ src: 'headshot.JPG' });
    }

    render() {
        return (
            <div className='App'>
                <Aside 
                    picture={this.state.src} 
                    handleMouseLeave={this.handleMouseLeave} 
                    handleMouseOver={this.handleMouseOver} 
                />
                <Main />
            </div>
        );
    }
}

export default App;
