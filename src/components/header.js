import { createMenuButton } from './component_block/menuBlock.js'
import {createElementButton} from './component_block/buttonBlock.js'

export function createHeader() {
    const header = document.createElement("header")
    const wrapper = document.createElement('div')
    const logo = document.createElement("img")
    const footerHeader = document.createElement('div')
    const list = document.createElement('ul')

    logo.className = 'header-logo'
    logo.src = 'public/assets/icons/lOGO.svg'
    footerHeader.className = 'footer-header'
    list.className = 'list-header'
    wrapper.className = 'wrapper-header'

    document.body.before(header)
    header.append(wrapper)
    wrapper.prepend(logo)

    wrapper.insertAdjacentHTML('beforeend',
        '<div class="header-information">' +
            '<p class="phone-number"><img class="phone-number-image" src="/public/assets/icons/watsapp.svg"/>+7(863) 000 00 00</p>' +
            '<div class="block-city">' +
                '<p class="city"><img class="image-city" src="/public/assets/icons/placeholder.svg"/>Ростов-на-Дону</p>' +
                '<p class="address">ул. Ленина, 2Б</p>' +
            '</div>' +
        '</div>'
    )

    list.innerHTML = '<li class="element-list-header"><a class="element-list-header-a" href="#">О клинике</a></li>' +
                    '<li class="element-list-header"><a class="element-list-header-a" href="#">Услуги</a></li>' +
                    '<li class="element-list-header"><a class="element-list-header-a" href="#">Специалисты</a></li>' + 
                    '<li class="element-list-header"><a class="element-list-header-a" href="#">Цены</a></li>' +
                    '<li class="element-list-header"><a class="element-list-header-a" href="#">Контакты</a></li>'

    createMenuButton(wrapper)
    createElementButton('Записаться на прием', 1, wrapper, 'header-button')
    header.append(footerHeader)
    footerHeader.append(list)
}
