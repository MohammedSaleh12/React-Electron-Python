import axios from 'axios'



export const featchitem= (auth ) => {
    
    let getitem = {
        method: 'get',
        url: '/item',
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'x-access-token': auth
        }
    
    }
    return new Promise((resolve, reject) => {
        axios(getitem)
        .then(function (response) {
            resolve(response.data)    
        })
        .catch(function (error) {
          reject(error)
          
        })
         
    })
}
