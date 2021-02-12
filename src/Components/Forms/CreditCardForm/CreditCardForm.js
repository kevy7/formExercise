import react, { useState } from 'react';
import styles from './CreditCardForm.module.css';

let CreditCardForm = () => {
    //initialize our state data with useState
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    let handleSubmit = () => {
        //make a post request with the data above
        alert("thank you for submitting your form")

        //after the post request is done, reset the state for your form
    }

    return (
        <div>
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