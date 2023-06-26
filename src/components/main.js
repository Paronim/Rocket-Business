import { createElementFeed } from './component_block/feedBlock.js'
import { requestFeed } from '/src/sdk/fetch.js'
import {storeGet} from '/src/store/store.js'

export async function createMain() {
    await requestFeed().then(() => {

        const main = document.createElement('div')
        main.id = 'main'
        document.body.prepend(main)

        createElementFeed(main, storeGet())
    })

    
}