import axios from 'axios'; 
import {storeSet} from '../store/store.js'

export async function requestFeed () {
    await axios.get('https://github.com/Paronim/Rocket-Business/tree/main/src/data/feed.jcon').then(res => {
        storeSet(res)
    }).catch(error => console.log(error))
}

export async function requestSlider () {
    await axios.get('https://github.com/Paronim/Rocket-Business/tree/main/src/data/slider.jcon').then(res => {
        storeSet(res)
    }).catch(error => console.log(error))
}
