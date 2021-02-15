import React from 'react';
import { render, screen, fireEvent, } from '@testing-library/react';
import MoneyInput from './MoneyInput';

describe("MoneyInput is currently rendered", () => {

    //mock props that we will pass down to our MoneyInput component
    let mockProps = {
        label: "label test",
        placeholder: "placeholder test",
        name: "name test",
        value: "value test",
        onChange: jest.fn(),
        onBlur: jest.fn()
    }

    //setup our component for testing
    beforeEach(() => {

        render(<MoneyInput 
            label={mockProps.label}
            placeholder={mockProps.placeholder}
            name={mockProps.name}
            value={mockProps.value}
            onChange={mockProps.onChange} //mock function
            onBlur={mockProps.onBlur} //mock function
        />)
    })

    test("onChange function is called on an onChange event", async () => {
        const inputField = screen.queryByTestId("money-input");
        fireEvent.change(inputField, {
            target: { value: "400" },
        })

        await expect(mockProps.onChange).toHaveBeenCalled();
    })

    test("onBlur function is called on an onBlur event", async () => {
        const inputField = screen.queryByTestId("money-input");
        fireEvent.blur(inputField);

        await expect(mockProps.onBlur).toHaveBeenCalled();
    })

    test("label is properly passed in and rendered", () => {
        const label = screen.queryByTestId("money-label");
        //expect our label to render the label text that we passed in as a prop
        expect(label.textContent).toBe(mockProps.label)
    })

    test("placeholder is properly passed in and rendered", () => {
        const inputField = screen.queryByTestId("money-input");
        expect(inputField.placeholder).toBe(mockProps.placeholder);
    })

    test("name is properly passed in and rendered", () => {
        const inputField = screen.queryByTestId("money-input");
        expect(inputField.name).toBe(mockProps.name);
    })

    test("value is properly passed in and rendered", () => {
        const inputField = screen.queryByTestId("money-input");
        expect(inputField.value).toBe(mockProps.value);
    })
    
})