import axios from "axios";




export default axios.create({
    // baseURL:'https://localhost:5001/auth',
    baseURL:'/auth',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    

})