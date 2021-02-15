import React from 'react';
import { render, screen, fireEvent,  waitFor } from '@testing-library/react';
//wrap any code performing state updates in act
//this helps make your test run similar to how it does in the browser and removes act warning messages
import { act } from 'react-test-renderer';
import CreditCardForm from './CreditCardForm';


describe("form is rendered", () => {

    test('submit button is rendered', () => {
        render(<CreditCardForm />);
        const submitButton = screen.findByTestId("Submit-Form");
        expect(submitButton).toBeTruthy();
    });

    //check that the modal is opened after clicking on the submit button
    test("modal is displayed after user successfully makes a post request", async () => {

        await act (async() => {
            render(<CreditCardForm />);
        })
    
        fireEvent.change(screen.getByTestId('money-input'), {
            target: {value: '400.00'},
        })
        fireEvent.change(screen.getByTestId('card-input'), {
            target: {value: '1234567812345678'},
        })
        fireEvent.change(screen.getByTestId('month-input'), {
            target: {value: '12'},
        })
        fireEvent.change(screen.getByTestId('year-input'), {
            target: {value: '2055'},
        })

        
        const submitBtn = screen.getByTestId('Submit-Form');
        //also, check that the button is not disabled after completing the form with no input errors
        expect(submitBtn.hasAttribute('disabled')).toBe(false);

        fireEvent.click(submitBtn);
        
        const alert = await screen.findByTestId('modal');
        expect(alert).toBeInTheDocument();
        
    })

    test("modal is not displayed after user clicks on the submit button with input errors", async () => {
        await act (async() => {
            render(<CreditCardForm />);
        })

        fireEvent.change(screen.getByTestId('money-input'), {
            target: {value: '400.00'},
        })
        fireEvent.change(screen.getByTestId('card-input'), {
            target: {value: '1234567812345678'},
        })
        fireEvent.change(screen.getByTestId('month-input'), {
            target: {value: '12'},
        })
        fireEvent.blur(screen.getByTestId('year-input'), {
            target: {value: ''},
        })

        const submitBtn = screen.getByTestId('Submit-Form');
        //check if the button is disabled due to input errors
        expect(submitBtn.hasAttribute('disabled')).toBe(true);

        //click on the button and check that it is not executing your onSubmit event
        fireEvent.click(submitBtn);
        //check that the modal did not display
        const alert = screen.queryByTestId('modal');
        expect(alert).not.toBeInTheDocument(alert)

    })

    test("all field input values are updated during an onChange event", () => {
        render(<CreditCardForm />);

        //input all valid values for all input fields
        fireEvent.change(screen.getByTestId('money-input'), {
            target: {value: '400.00'},
        })
        fireEvent.change(screen.getByTestId('card-input'), {
            target: {value: '1234567812345678'},
        })
        fireEvent.change(screen.getByTestId('month-input'), {
            target: {value: '12'},
        })
        fireEvent.change(screen.getByTestId('year-input'), {
            target: {value: '2025'},
        })

        //check if each field's values match based on the value assigned to them during an onChange event
        //onChange event is triggered when the user changes a value within in input field
        expect(screen.getByTestId('money-input').value).toBe('400.00');
        expect(screen.getByTestId('card-input').value).toBe('1234567812345678');
        expect(screen.getByTestId('month-input').value).toBe('12');
        expect(screen.getByTestId('year-input').value).toBe('2025');

    })

    test("all field input values are updated during an onBlur event", () => {
        render(<CreditCardForm />);

        //input all valid values for all input fields
        fireEvent.blur(screen.getByTestId('money-input'), {
            target: {value: '400.00'},
        })
        fireEvent.blur(screen.getByTestId('card-input'), {
            target: {value: '1234567812345678'},
        })
        fireEvent.blur(screen.getByTestId('month-input'), {
            target: {value: '12'},
        })
        fireEvent.blur(screen.getByTestId('year-input'), {
            target: {value: '2025'},
        })

        //check if each field's values match based on the value assigned to them during an onBlur event
        //onBlure event is triggered when an input field is no longer in focus
        expect(screen.getByTestId('money-input').value).toBe('400.00');
        expect(screen.getByTestId('card-input').value).toBe('1234567812345678');
        expect(screen.getByTestId('month-input').value).toBe('12');
        expect(screen.getByTestId('year-input').value).toBe('2025');

    })


})

describe("error messages", () => {
    test("are not initially shown when the page first renders and the submit button is initially disabled", async () => {
        render(<CreditCardForm />);
        //return all error elements
        const errorElements = screen.queryAllByTestId("err-display");
        //we expect the number of returned elements to be 0 because there are currently no errors
        expect(errorElements.length).toBe(0);

        //checks if the submit btn is initially disabled for the user
        const submitBtn = await screen.findByTestId('Submit-Form');
        expect(submitBtn.hasAttribute('disabled')).toBe(true);
    })

    test("are not shown when all input values are valid and the submit button is enabled", async () => {
        render(<CreditCardForm />);

        //fill the form out
        fireEvent.change(screen.getByTestId('money-input'), {
            target: {value: '400.00'},
        })
        fireEvent.change(screen.getByTestId('card-input'), {
            target: {value: '1234567812345678'},
        })
        fireEvent.change(screen.getByTestId('month-input'), {
            target: {value: '12'},
        })
        fireEvent.change(screen.getByTestId('year-input'), {
            target: {value: '2055'},
        })

        const errorElements = screen.queryAllByTestId("err-display");
        expect(errorElements.length).toBe(0);

        //checks if the submit btn is not disabled after all input fields are valid
        const submitBtn = await screen.findByTestId('Submit-Form');
        expect(submitBtn.hasAttribute('disabled')).toBe(false);

    })

    test('are shown when there are errors in every input field and the submit button is disabled', async () => {
        render(<CreditCardForm />);

        //fill the form out
        fireEvent.change(screen.getByTestId('money-input'), {
            target: {value: 'error'},
        })
        fireEvent.change(screen.getByTestId('card-input'), {
            target: {value: 'error'},
        })
        fireEvent.change(screen.getByTestId('month-input'), {
            target: {value: 'error'},
        })
        fireEvent.change(screen.getByTestId('year-input'), {
            target: {value: 'error'},
        })

        //find all error elements
        const errorElements = screen.queryAllByTestId("err-display");
        expect(errorElements.length).toBe(4);

        //checks if the submit btn is disabled after all input fields are invalid
        const submitBtn = await screen.findByTestId('Submit-Form');
        expect(submitBtn.hasAttribute('disabled')).toBe(true);
    })

    test("are shown when every input field is empty after an onBlur event and the submit button is disabled", async () => {
        render(<CreditCardForm />);

        //fill the form out
        fireEvent.blur(screen.getByTestId('money-input'), {
            target: {value: ''},
        })
        fireEvent.blur(screen.getByTestId('card-input'), {
            target: {value: ''},
        })
        fireEvent.blur(screen.getByTestId('month-input'), {
            target: {value: ''},
        })
        fireEvent.blur(screen.getByTestId('year-input'), {
            target: {value: ''},
        })

        //find all error elements
        const errorElements = screen.queryAllByTestId("err-display");
        expect(errorElements.length).toBe(4);

        //checks if the submit btn is disabled after all input fields are invalid
        const submitBtn = await screen.findByTestId('Submit-Form');
        expect(submitBtn.hasAttribute('disabled')).toBe(true);

    })
})
