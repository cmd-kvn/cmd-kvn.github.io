import React from 'react';
import PropTypes from 'prop-types';

import './Aside.css';

const Aside = (props) => {
    return (
        <aside>
            <img src={props.picture} alt='kevin headshot' 
                onMouseLeave={props.handleMouseLeave} 
                onMouseOver={props.handleMouseOver}
            />
        </aside>
    );
};

Aside.propTypes = {
    picture: PropTypes.string.isRequired,
    handleMouseLeave: PropTypes.func.isRequired,
    handleMouseOver: PropTypes.func.isRequired,
};

export default Aside;
