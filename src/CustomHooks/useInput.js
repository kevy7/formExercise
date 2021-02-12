import { useState } from 'react';

export const useInput = (initialV) => {
    const [value, setValue] = useState(initialV);

    return {
        value,
        setValue,
        resetValue: () => setValue(""),
        onChange: event => {
            setValue(event.target.value);
        }
    }
}