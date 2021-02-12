import axios from 'axios';

//fake post request
export const postPayment = async (paymentInfo) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", paymentInfo)
    // .then(userData => {
    //     // response = userData;
    //     // console.log(userData);
    //  return userData;

    // })
    // .catch(err => {

    // })
}