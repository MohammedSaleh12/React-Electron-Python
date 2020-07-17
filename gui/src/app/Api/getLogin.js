
import axios from 'axios'

const base64 = require('base-64');

const featchLogin = ( username , password ) => {
    let basic = 'Basic ' + base64.encode(username + ":" + password)
    let login = {
        method: 'get',
        url: '/login',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'Authorization': basic,  
        }
    
    }
    return new Promise((resolve, reject) => {
        axios(login)
        .then(function (response) {
            resolve(response.data)    
        })
        .catch(function (error) {
          reject(error)
          
        })
         
    })
}
export default featchLogin