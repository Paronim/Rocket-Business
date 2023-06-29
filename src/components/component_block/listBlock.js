
export function createElementList(element, className=``) {
    const list = document.createElement(`ul`)

    list.className = `list-${className}`

    list.innerHTML = `<li class="element-list-${className}"><a class="element-list-${className}-a" href="#">О клинике</a></li>` +
                    `<li class="element-list-${className}"><a class="element-list-${className}-a" href="#">Услуги</a></li>` +
                    `<li class="element-list-${className}"><a class="element-list-${className}-a" href="#">Специалисты</a></li>` + 
                    `<li class="element-list-${className}"><a class="element-list-${className}-a" href="#">Цены</a></li>` +
                    `<li class="element-list-${className}"><a class="element-list-${className}-a" href="#">Контакты</a></li>`
                
    element.append(list)
}

export default createElementList