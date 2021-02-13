import react, { useState } from 'react';

import Modal from '../../Modals/Modal';
import MoneyInput from '../../Inputs/MoneyInput/MoneyInput';
import CardInput from '../../Inputs/CardInput/CardInput';
import DateInput from '../../Inputs/DateInput/DateInput';
import './CreditCardForm.scss';
import { useInput } from '../../../CustomHooks/useInput';
import { postPayment } from '../../../Actions';

//import styling
import '../../Inputs/Inputs.scss';

let CreditCardForm = () => {
    //initialize our state with useInput
    const { value:amount, resetValue:resetAmount, onChange:changeAmount, setValue:setAmount } = useInput('');
    const { value:cardNumber, resetValue:resetCardNumber, onChange:changeCardNumber } = useInput('');
    const { value:month, resetValue:resetMonth, onChange:changeMonth } = useInput('');
    const { value:year, resetValue:resetYear, onChange:changeYear } = useInput('');
    const [showModal, setShowModal] = useState(false); // if this is set to true, then show the modal for the user

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //fake data, we will send to the api route below
        let paymentInfo = {
            title: amount,
            body: cardNumber, 
            userId: month + "/" + year,
        }

        console.log(paymentInfo)

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
        .catch(err => {
            //check for an error from the request
        })
    }

    const handleBlur = (e) => {
        //create a validator function and import it from above
        //Create a list of validators that you can pass into an array and that
        //array will be passed into your validator function
    }

    return (
        <div className="form-container">
            {(showModal && <Modal displayModal={setShowModal}/>)}
            <h2>Payment Form</h2>
            <form onSubmit={handleSubmit} className="credit-card-form">
                <MoneyInput 
                    label="Amount"
                    value={amount}
                    name="amount"
                    onChange={changeAmount}
                    //first create your list of validator functions
                    //when ever onBlur is triggered, let's validate the input field
                    //if there is an error, then let's add that error to our state error object
                    //below the money input, let's display the erorr if our error obejct contains an error
                    //example if(error[fieldName]) then display the error message
                    onBlur={handleBlur}
                />
                
                <CardInput 
                    label="Credit Card Number"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={changeCardNumber}
                />

                <DateInput
                    month={month}
                    changeMonth={changeMonth}
                    year={year}
                    changeYear={changeYear}
                />

                <div className="form-btn-wrapper">
                    <input className="form-btn" type="submit" value="Submit" />
                </div>

            </form>
        </div>
    )
}

export default CreditCardForm;