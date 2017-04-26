import React from 'react';

const Title = () => {
    let fontSize = {
        fontSize: 72
    };

    return (
        <div>
            <p>
                <span style={fontSize}>Kevin Wong</span> <br />
                Full Stack Web Developer &nbsp; - &nbsp; React.js / Node.js
            </p>
            <hr />
        </div>
    );
};

export default Title;
