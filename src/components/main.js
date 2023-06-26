import { createElementFeed } from './component_block/feedBlock.js'
import { createElementSlider } from './component_block/sliderBlock.js'
import { requestFeed, requestSlider } from '/src/sdk/fetch.js'
import {storeGet} from '/src/store/store.js'

export async function createMain() {

    const main = document.createElement('div')
    main.id = 'main'
    document.body.prepend(main)

    await requestFeed().then(() => {

        createElementFeed(main, storeGet())
    })

    await requestSlider().then(() => {

        createElementSlider(main, storeGet())
    })
    
}