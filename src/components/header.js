import { createMenuButton } from './component_block/menuBlock.js'
import { createElementButton } from './component_block/buttonBlock.js'
import { createElementList } from './component_block/listBlock.js'

export function createHeader() {
    const header = document.createElement("header")
    const wrapper = document.createElement('div')
    const logo = document.createElement("img")
    const footerHeader = document.createElement('div')

    logo.className = 'header-logo'
    logo.src = './public/assets/LOGO.svg'
    footerHeader.className = 'footer-header'
    wrapper.className = 'wrapper-header'

    document.body.before(header)
    header.append(wrapper)
    wrapper.prepend(logo)

    wrapper.insertAdjacentHTML('beforeend',
        '<div class="header-information">' +
            '<p class="phone-number"><img class="phone-number-image" src="./public/assets/whatsapp.svg"/>+7(863) 000 00 00</p>' +
            '<div class="block-city">' +
                '<p class="city"><img class="image-city" src="./public/assets/placeholder.svg"/>Ростов-на-Дону</p>' +
                '<p class="address">ул. Ленина, 2Б</p>' +
            '</div>' +
        '</div>'
    )

    createMenuButton(wrapper)
    createElementButton('Записаться на прием', 1, wrapper, 'header-button')
    header.append(footerHeader)
    createElementList(footerHeader, 'header')
}
