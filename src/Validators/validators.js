//contains a list of validators that we will use to validate an input field
//each validator should accept a value as an arugment

//checks if field is empty
export const validateIsEmpty = (fieldName, fieldVal) => {
    if(fieldVal.trim() === ''){
        return "${fieldName} is a required field."
    }
    return null;
}

//check if card number digits is less than 16
export const validateCardNumberDigits = (fieldName, fieldVal) => {
    if(fieldVal.trim().length !== 16){
        return "${fieldName} must be 16 digits."
    }
    return null;
}

//check if month is valid
export const validateMonth = (fieldName, fieldVal) => {

    //check if month is 2 digits, it must follow the format mm
    if(fieldVal.trim().length !== 2){
        return fieldName + " must be 2 digits and follow the following format: MM."
    }

    // let validNumber = validateNumbers(fieldName, fieldVal);
    if(fieldVal > 12 && fieldVal < 0){
        return fieldName + " is not a valid month number."
    }

    return null;
}

//check if the year is valid
export const validateYear = (fieldName, fieldVal) => {
    //check if year is 4 digits, it must follow the format YYYY
    if(fieldVal.trim().length !== 4){
        return fieldName + " must be 2 digits and follow the following format: YYYY."
    }

    return null;
}

//check if fieldVal contains any characters, if it does return an error
export const validateNumbers = (fieldName, fieldVal) => {

    ///^\d+$/ is a regular expression used to check for only digits
    if(/^\d+$/.test(fieldVal) === false){
        return fieldName + " must only be numbers. This field can not contain any letters or characters."
    }

    //return null if the condition above is not met
    return null;
}