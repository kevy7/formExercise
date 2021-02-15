import React from 'react';
import PropTypes from 'prop-types';

import './CardInput.scss';

const CardInput = (props) => {
    //the purpose of this object is to style your card-input based on the
    //user's selected card type
    const cardTypeClasses = {
        "4": "card-type-visa-and-master",
        "5": "card-type-visa-and-master",
        "34": "card-type-amex",
        "36": "card-type-amex",
        "6011": "card-type-discover"
    }

    return (
        <div className="card-input-container">
            <span className="input-field-container">
                <div className="input-label">
                    <label>{props.label}</label>
                </div>
                <span className="card-icon">{props.cardType}</span>
                <input 
                    className={`card-input ${ cardTypeClasses[props.cardType] }`}
                    type="text" 
                    placeholder={props.placeholder}
                    pattern="\d*" 
                    maxLength="16"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    data-testid="card-input"
                />
            </span>

            {/* component added to allow user to select their credit card type */}
            <span className="card-selection-container">
                <label className="card-type-label" htmlFor="card-type">Card Type</label>

                <select 
                    className="card-type-selection" 
                    name="card-types" 
                    id="card-types"
                    onChange={props.changeCardType}
                >
                    <option value="4">Visa</option>
                    <option value="5">Master</option>
                    <option value="34">Amex (34)</option>
                    <option value="36">Amex (36)</option>
                    <option value="6011">Discover</option>
                </select>
            </span>
        </div>
    )
}

CardInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    cardType: PropTypes.string,
    changeCardType: PropTypes.func,
}

export default CardInput;
