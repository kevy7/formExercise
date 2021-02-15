//contains a list of validators that we will use to validate an input field
//each validator should accept a value as an arugment

//checks if field is empty
export const validateIsEmpty = (fieldName, fieldVal) => {
    if(fieldVal.trim() === ''){
        return fieldName + " is a required field."
    }
    return null;
}

//check if card number digits is less than 16
export const validateCardNumberDigits = (fieldName, fieldVal) => {
    if(fieldVal.trim().length < 13){
        return fieldName + " must be at least 13 digits."
    }
    return null;
}

//check if month is valid
export const validateMonth = (fieldName, fieldVal) => {

    //check if month is 2 digits, it must follow the format mm
    if(fieldVal.trim().length !== 2){
        return fieldName + " must follow the format: MM."
    }

    if(fieldVal > 12 || fieldVal < 0){
        return fieldName + " is not a valid month number."
    }

    return null;
}

//check if the year is valid
export const validateYear = (fieldName, fieldVal) => {
    //check if year is 4 digits, it must follow the format YYYY
    if(fieldVal.trim().length !== 4){
        return fieldName + " must follow the format: YYYY."
    }

    return null;
}

//check if fieldVal contains any characters, if it does return an error
export const validateNumbers = (fieldName, fieldVal) => {

    ///^\d+$/ is a regular expression used to check for only digits
    if(/^\d+$/.test(fieldVal) === false){
        return fieldName + " can only contain numbers."
    }

    return null;
}

export const validateUSNumbers = (fieldName, fieldVal) => {

    //below is a regular expression used to check for valid U.S. digits
    if(/^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(fieldVal) === false){
        return fieldName + " can only be in US currency format."
    }

    return null;
}