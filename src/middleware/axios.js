import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: 'https://us-central1-design-ecommerce-283d9.cloudfunctions.net/api' 
});

export default instance;

//http://localhost:5001/design-ecommerce-283d9/us-central1/api'