import React from 'react';
import PropTypes from 'prop-types';
import './MoneyInput.scss';

const MoneyInput = (props) => {
    return (
        <div className="input-container">
            <div className="input-label">
                <label>{props.label}</label>
            </div>
            {/* <label className="input-label">{props.label}</label> */}
            <input 
                className="input" 
                type="text" 
                placeholder={props.placeholder} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}

MoneyInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default MoneyInput;