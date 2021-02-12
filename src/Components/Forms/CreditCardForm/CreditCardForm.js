import react, { useState } from 'react';

import Modal from '../../Modals/Modal';
import styles from './CreditCardForm.module.css';
import { useInput } from '../../../CustomHooks/useInput';

let CreditCardForm = () => {
    //initialize our state with useInput
    const { value:amount, resetValue:resetAmount, onChange:changeAmount, setValue:setAmount } = useInput('');
    const { value:cardNumber, resetValue:resetCardNumber, onChange:changeCardNumber } = useInput('');
    const { value:month, resetValue:resetMonth, onChange:changeMonth } = useInput('');
    const { value:year, resetValue:resetYear, onChange:changeYear } = useInput('');
    const [showModal, setShowModal] = useState(false); // if this is set to true, then show the modal for the user

    //make this an async/await function, wait for the api call to be successfull and then show the modal
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //data, we pretend will be submitted to our api
        let obj = {
            amount, cardNumber, month, year
        }

        //after the post request is done, reset the state for your form
        resetAmount();
        resetCardNumber();
        resetMonth();
        resetYear();

        setShowModal(true);
    }

    return (
        <div>
            {(showModal && <Modal displayModal={setShowModal}/>)}
            <form onSubmit={handleSubmit}>
                {/* amount input */}
                <div>
                    <label className="label">Amount</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="" 
                        name="amount"
                        value={amount}
                        onChange={changeAmount}
                    />
                </div>
                
                <div>
                    <label className="label">Credit Card Number</label>
                    <input 
                        className="input" 
                        type="tel" 
                        placeholder="Card Number" 
                        pattern="\d*" 
                        maxLength="16"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={changeCardNumber}
                    />
                </div>

                <label className="label">MM</label>
                <input 
                    className="input" 
                    type="tel" 
                    pattern="\d*"
                    maxLength="2"
                    name="MM"
                    value={month}
                    onChange={changeMonth}
                />
                /
                <label className="label">YYYY</label>
                <input 
                    className="input" 
                    type="text"
                    pattern="\d*"
                    maxLength="4"
                    name="YY"
                    value={year}
                    onChange={changeYear}
                />
                
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </div>
    )
}

export default CreditCardForm;