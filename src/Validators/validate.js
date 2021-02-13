//The purpose of this function is to validate a user's form
//for the first argument, you pass in a list of validators for an input field
//for example, if we were validating the amount field, we would pass in the following validators
//check for only numbers, no negative numbers.
//this function returns either an error or null. null is returned if there are no errors.

const validate = (validators, fieldName, fieldVal) => {

    let error = null; //return an error if it was found, else return null

    //loop through and execute each validator
    for(let a = 0; a < validators.length; a ++){
        if(error === null){
            error = validators[a](fieldVal); //check if there is an error for the following value
        }
        break; //break out from loop once we found an error.
    }

    return error;
}

export default validate;