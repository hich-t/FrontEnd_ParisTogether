import axios from "axios";


const fetch = (url) => {
const callData = []
    axios.get(url) 
      .then(res => {callData.push(res.data)});
 return callData
}

export {fetch}