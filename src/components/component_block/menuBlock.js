
let stateMenu = true

const menuButtonOpen = "<div class='label-menu-block'></div>" + 
                        "<div class='label-menu-block'></div>" + 
                        "<div class='label-menu-block'></div>"
const menuButtonClose = '<img src="/public/assets/icons/Close.svg"/>'
import {createElementButton} from './buttonBlock.js'


function openMenuBody(el) {
    const menuBody = document.createElement('section')
    const list = document.createElement('ul')

    menuBody.className = 'menu-body'
    menuBody.style.position = 'absolute'
    list.className = 'list-menu'

    list.innerHTML = '<li class="element-list-menu"><a class="element-list-menu-a" href="#">О клинике</a></li>' +
                    '<li class="element-list-menu"><a class="element-list-menu-a" href="#">Услуги</a></li>' +
                    '<li class="element-list-menu"><a class="element-list-menu-a" href="#">Специалисты</a></li>' + 
                    '<li class="element-list-menu"><a class="element-list-menu-a" href="#">Цены</a></li>' +
                    '<li class="element-list-menu"><a class="element-list-menu-a" href="#">Контакты</a></li>'

    menuBody.append(list)

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