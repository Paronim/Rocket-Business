import { createMenu } from './component_block/menuBlock.js'


export function createHeader () {
    const header = document.createElement("header")
    const logo = document.createElement("img")

    logo.className = 'header-logo'
    logo.src = 'public/assets/icons/LOGO.svg'

    document.body.before(header)
    header.prepend(logo)

    header.insertAdjacentHTML('beforeend', 
            '<div>'+
                '<p class="phone-number">+7(863) 000 00 00</p>'+
                '<p class="city">Ростов-на-Дону</p>'+
            '</div>'
            )

    createMenu(header)

}
