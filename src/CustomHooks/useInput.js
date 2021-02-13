import { useState } from 'react';
import validate from '../Validators/validate';

export const useInput = (initialV, validators) => {
    const [value, setValue] = useState(initialV);
    //every input may have an error based on validation. If not error, then the error state should be null.
    const [error, setError] = useState(null);

    return {
        value,
        setValue,
        error,
        setError,
        resetValue: () => setValue(""),
        onChange: event => {
            let fieldName = event.target.name;
            let fieldVal = event.target.value;
            //validate this field based on the list of validators that is passed in
            if(validators.length){
                setError(validate(validators, fieldName, fieldVal));
            }
            setValue(event.target.value);
        },
        onBlur: event => {
            let fieldName = event.target.name;
            let fieldVal = event.target.value;
            //validate this field based on the list of validators that is passed in
            if(validators.length){
                setError(validate(validators, fieldName, fieldVal));
            }
        }
    }
}