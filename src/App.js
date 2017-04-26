import React, { Component } from 'react';

import Aside from './components/Aside';
import Main from './components/Main/Main';

import './App.css';

class App extends Component {
    render() {
        return ( 
            <div className='App'>
                <Aside />
                <Main />
            </div>
        );
    }
}

export default App;
