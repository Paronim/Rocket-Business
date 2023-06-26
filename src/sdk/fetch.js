import axios from 'https://cdn.skypack.dev/axios'; 
import {storeSet} from '../store/store.js'

export async function requestFeed () {
    await axios.get('data/feed.json').then(res => {
        storeSet(res)
    }).catch(error => console.log(error))
}
