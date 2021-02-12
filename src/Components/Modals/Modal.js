import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = (props) => {
    //pass down a function to update the showModal state to false when clicking on the X button
    const handleClick = () => {
        props.displayModal(false);
    }

    return (
        <div className="modal">
            <div className="modal-body">
                <span className="modal-body-closebtn" onClick={handleClick}>X</span>
                <p>Success: Payment was made! Thanks for your purchase!</p>
            </div>
        </div>
    )
}

Modal.propTypes = {
    displayModal: PropTypes.func,
}

export default Modal;