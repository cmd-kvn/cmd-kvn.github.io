import React, { Component } from 'react';

import Aside from './components/Aside';
import Main from './components/Main/Main';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'headshot_framed.jpg',
            background: 'none'
        };
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.setState({ src: 'comic_framed.jpg', background: 'background.gif' });
    }

    handleMouseLeave() {
        this.setState({ src: 'headshot_framed.jpg', background: 'none' });
    }

    render() {
        const style = { backgroundImage: `url(${this.state.background})` };

        return (
            <div className='App' style={style}>
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
