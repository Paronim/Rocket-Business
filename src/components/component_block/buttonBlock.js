
export function createElementButton (content, type, element, className='') {
    const button = document.createElement('button')

    switch(type){
        case 1: button.className = `button button-1 ${className}`
            break
        case 2: button.className = `button button-2 ${className}`
            break
        case 3: button.className = `button button-3 ${className}`
            break
        default: console.error('Нет такого типа кнопки')
    }
        
    button.textContent = content

    element.append(button)
}