import React from 'react';
import PropTypes from 'prop-types';

import './CardInput.scss';

const CardInput = (props) => {
    return (
        <div className="input-container">
            <div className="input-label">
                <label>{props.label}</label>
            </div>
            <input 
                className="input" 
                type="tel" 
                placeholder={props.placeholder}
                pattern="\d*" 
                maxLength="16"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

CardInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default CardInput;
