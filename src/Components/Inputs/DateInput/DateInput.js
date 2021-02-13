import React from 'react';
import PropTypes from 'prop-types';

import './DateInput.scss';

const DateInput = (props) => {
    return (
        <div className="date-input-container">
            {/* <label className="label">MM</label> */}
            <div>
                <div className="label">
                    <label>Month</label>
                </div>
                <input 
                    className="input month-input" 
                    type="tel" 
                    pattern="\d*"
                    maxLength="2"
                    name="MM"
                    value={props.month}
                    onChange={props.changeMonth}
                />

            </div>
                
            <div>
                <div className="label">
                    <label>Year</label>
                </div>
                <input 
                    className="input year-input" 
                    type="text"
                    pattern="\d*"
                    maxLength="4"
                    name="YY"
                    value={props.year}
                    onChange={props.changeYear}
                />
            </div>

        </div>
    )
}

DateInput.propTypes = {
    month: PropTypes.string,
    changeMonth: PropTypes.func,
    year: PropTypes.string,
    changeYear: PropTypes.func,
}

export default DateInput;