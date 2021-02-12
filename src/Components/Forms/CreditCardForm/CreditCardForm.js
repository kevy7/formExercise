import react, { useState } from 'react';

import Modal from '../../Modals/Modal';
import styles from './CreditCardForm.module.css';
import { useInput } from '../../../CustomHooks/useInput';

let CreditCardForm = () => {
    //initialize our state with useInput
    const { value:amount, resetValue:resetAmount, onChange:changeAmount, setValue:setAmount } = useInput('hello world');
    const { value:cardNumber, resetValue:resetCardNumber, onChange:changeCardNumber } = useInput('');
    const { value:month, resetValue:resetMonth, onChange:changeMonth } = useInput('');
    const { value:year, resetValue:resetYear, onChange:changeYear } = useInput('');
    const [showModal, setShowModal] = useState(false); // if this is set to true, then show the modal for the user

    let handleSubmit = () => {
        //after the post request is done, reset the state for your form

    }

    return (
        <div>
            <Modal />
            <form onSubmit={handleSubmit}>
                {/* amount input */}
                <div>
                    <label className="label">Amount</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="" 
                        name="amount" 
                        /*value={this.state.eventImage} onChange={this.handleInputChanges}*/ 
                    />
                </div>
                
                <div>
                    <label className="label">Credit Card Number</label>
                    <input 
                        className="input" 
                        type="tel" 
                        placeholder="Card Number" 
                        pattern="\d*" 
                        maxlength="16"
                        name="cardNumber"
                        /*value={this.state.eventImage} onChange={this.handleInputChanges}*/ 
                    />
                </div>

                <label className="label">MM</label>
                <input 
                    className="input" 
                    type="tel" 
                    pattern="\d*"
                    maxlength="2"
                    name="MM"
                    /*value={this.state.eventImage} onChange={this.handleInputChanges}*/ 
                />
                /
                <label className="label">YYYY</label>
                <input 
                    className="input" 
                    type="text"
                    pattern="\d*"
                    maxlength="4"
                    name="YY"
                    /*value={this.state.eventImage} onChange={this.handleInputChanges}*/ 
                />
                
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </div>
    )
}

export default CreditCardForm;