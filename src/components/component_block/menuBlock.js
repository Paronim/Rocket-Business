import { createElementList } from './listBlock.js'

let stateMenu = true

const menuButtonOpen = "<div class='label-menu-block'></div>" + 
                        "<div class='label-menu-block'></div>" + 
                        "<div class='label-menu-block'></div>"
const menuButtonClose = '<img src="/public/assets/icons/Close.svg"/>'
import {createElementButton} from './buttonBlock.js'


function openMenuBody(el) {
    const menuBody = document.createElement('section')

    menuBody.className = 'menu-body'
    menuBody.style.position = 'absolute'

    createElementList(menuBody, 'menu')

    createElementButton('Записаться на прием', 3, menuBody)

    el.prepend(menuBody)
}

function closeMenuBody(el) {
    const menuBody = document.querySelector('.menu-body')
    el.removeChild(menuBody)
}

export function createMenuButton(el) {
    
    const menu = document.createElement('div')
    menu.className = 'label-menu'
    menu.innerHTML = menuButtonOpen

    el.prepend(menu)

    menu.addEventListener('click', () => {
        if(stateMenu === true){
            openMenuBody(el)
            stateMenu = false
            menu.innerHTML = menuButtonClose
        } else {
            closeMenuBody(el)
            stateMenu = true
            menu.innerHTML = menuButtonOpen
        }   
    })
} 