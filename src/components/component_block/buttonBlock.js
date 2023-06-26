
export function createElementButton (content, type, element) {
    const button = document.createElement('button')

    switch(type){
        case 1: button.className = 'button-1'
            break
        case 2: button.className = 'button-2'
            break
        case 3: button.className = 'button-3'
            break
        default: console.error('Нет такого типа кнопки')
    }
        
    button.textContent = content

    element.append(button)
}