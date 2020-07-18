
import axios from 'axios'



const featchtable = (auth ) => {
    
    let gettabels = {
        method: 'get',
        url: '/table',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'x-access-token': auth
        }
    
    }
    return new Promise((resolve, reject) => {
        axios(gettabels)
        .then(function (response) {
            resolve(response.data)    
        })
        .catch(function (error) {
          reject(error)
          
        })
         
    })
}
export default featchtable