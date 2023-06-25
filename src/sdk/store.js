import axios from "axios";

export const store = axios.get('/data/feed.json').then(res => {
    return res
}).catch(error => console.log(error))