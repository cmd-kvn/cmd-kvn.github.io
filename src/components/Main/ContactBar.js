import React from 'react';

import './ContactBar.css';

const ContactBar = () => {
    return (
        <nav>
            <a href='mailto:cmd.kvn@gmail.com'>
                <img src='email-icon.png' alt='email icon' />
            </a>
            <a href='https://github.com/cmd-kvn'>
                <img src='github-icon.png' alt='github icon' />
            </a>
            <a href='https://www.linkedin.com/in/kevin-wong-devkev/'>
                <img src='linkedIn-icon.png' alt='linkedIn icon' />
            </a>
        </nav>
    );
};

export default ContactBar;
