import react, { useState } from 'react';

import Modal from '../../Modals/Modal';
import MoneyInput from '../../Inputs/MoneyInput/MoneyInput';
import CardInput from '../../Inputs/CardInput/CardInput';
import DateInput from '../../Inputs/DateInput/DateInput';
//custom hook created for this form
import { useInput } from '../../../CustomHooks/useInput';
//our api call
import { postPayment } from '../../../Actions';

//validation
import {
    validateIsEmpty, //check if field is empty
    validateCardNumberDigits, //validates if card number is exactly 16 digits
    validateMonth, //validate if input is a valid month
    validateYear, //validate if inout is a valid year
    validateNumbers, //validates if field contains only numbers
    validateUSNumbers, //check if field value matches US currency format
} from '../../../Validators/validators';

//import styling
import './CreditCardForm.scss';
import '../../Inputs/Inputs.scss';

let CreditCardForm = () => {
    //initialize our state with useInput
    const { 
        value:amount, 
        resetValue:resetAmount, 
        onChange:changeAmount, 
        error: amountErr,
        onBlur: onBlurAmount
    } = useInput('', [validateIsEmpty, validateUSNumbers]);
    const { 
        value:cardNumber, 
        resetValue:resetCardNumber, 
        onChange:changeCardNumber,
        error: cardNumberErr,
        onBlur: onBlurCardNumber
    } = useInput('', [validateIsEmpty, validateNumbers, validateCardNumberDigits]);
    const { 
        value:month, 
        resetValue:resetMonth, 
        onChange:changeMonth ,
        error: monthErr,
        onBlur: onBlurMonth
    } = useInput('', [validateIsEmpty, validateNumbers, validateMonth]);
    const { 
        value:year, 
        resetValue:resetYear, 
        onChange:changeYear,
        error: yearErr,
        onBlur: onBlurYear
    } = useInput('', [validateIsEmpty, validateNumbers, validateYear]);

    const [showModal, setShowModal] = useState(false); // if this is set to true, then show the modal for the user

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //fake data, we will be sent to the api route below
        let paymentInfo = {
            title: amount,
            body: cardNumber, 
            userId: month + "/" + year,
        }

        //postPayment will return a promise
        postPayment(paymentInfo).then(response => {
            //after the post request is done, reset the state for your form
            resetAmount();
            resetCardNumber();
            resetMonth();
            resetYear();
            //show modal after a sucessfull submit
            setShowModal(true);
        })
    }

    return (
        <div className="form-container">
            {(showModal && <Modal displayModal={setShowModal}/>)}
            {/* <Modal displayModal={setShowModal}/> */}
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit} className="credit-card-form">
                <MoneyInput 
                    label="Amount"
                    value={amount}
                    name="Amount"
                    onChange={changeAmount}
                    onBlur={onBlurAmount}
                />
                {(amountErr!==null && <p className="err-display" data-testid="err-display">{amountErr}</p>)}
                
                <CardInput 
                    label="Credit Card Number"
                    name="Card Number"
                    value={cardNumber}
                    onChange={changeCardNumber}
                    onBlur={onBlurCardNumber}
                />
                {(cardNumberErr!==null && <p className="err-display" data-testid="err-display">{cardNumberErr}</p>)}

                <DateInput
                    month={month}
                    changeMonth={changeMonth}
                    year={year}
                    changeYear={changeYear}
                    onBlurMonth={onBlurMonth}
                    onBlurYear={onBlurYear}
                />
                
                {(monthErr!==null && <p className="err-display" data-testid="err-display">{monthErr}</p>)}
                {(yearErr!==null && <p className="err-display" data-testid="err-display">{yearErr}</p>)}

                <div className="form-btn-wrapper">
                    <input 
                        disabled={ 
                            //disable the button if there are errors in your input fields
                            //also, disable the button if all fields are empty
                            amountErr===null &&
                            cardNumberErr===null &&
                            monthErr===null &&
                            yearErr===null &&
                            amount !== '' &&
                            cardNumber !== '' &&
                            month !== '' &&
                            year !== ''
                            ? false : true
                        } 
                        className="form-btn" 
                        type="submit" 
                        value="Submit"
                        data-testid="Submit-Form"
                    />
                </div>

            </form>
        </div>
    )
}

export default CreditCardForm;