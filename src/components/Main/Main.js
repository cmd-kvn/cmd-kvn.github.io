import React from 'react';

import Title from './Title';
import Intro from './Intro';
import ContactBar from './ContactBar';
import './Main.css';

const Main = () => {
    return (
        <main>
            <Title />
            <Intro />
            <ContactBar />
        </main>
    );
};

export default Main;
