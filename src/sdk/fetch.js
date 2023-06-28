import axios from 'axios'; 
import {storeSet} from '../store/store.js'

export async function requestFeed () {
    await axios.get('../data/feed.json').then(res => {
        storeSet(res)
    }).catch(error => console.log(error))
}

export async function requestSlider () {
    await axios.get('../data/slider.json').then(res => {
        storeSet(res)
    }).catch(error => console.log(error))
}
