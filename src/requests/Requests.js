import axios from 'axios';

export default class Requests {
    constructor() {
      }

     SendPost(body){
        const headers = {
            'Content-Type': 'application/json'
        };
    
        console.log("Body: "+JSON.stringify(body));
        axios.post("http://localhost:5000/item/add", body, {
            headers: headers
          })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });


}
}