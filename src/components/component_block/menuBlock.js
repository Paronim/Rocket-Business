
export function createMenu(el) {
    
    const menu = document.createElement('div')
    menu.className = 'label-menu'
    menu.innerHTML = "<div class='label-menu-block'></div>" + 
                     "<div class='label-menu-block'></div>" + 
                     "<div class='label-menu-block'></div>"
    el.prepend(menu)

} 