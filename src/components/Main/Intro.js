import React from 'react';
import Markdown from 'markdown-to-jsx';

import './Intro.css';

const markdown = `
## Hello! I'm Kevin - your friendly neighborhood JavaScript developer.  
When I'm not protecting the community from \`eslint\` errors and 
unresolved \`Promise\` chains you will find me volunteering, at your 
local Meetup, or dancing Cuban salsa!
`.trim();

const Intro = () => {
    return (
        <article>
            <Markdown>
                {markdown}
            </Markdown>
        </article>
    );
};

export default Intro;
