
export function createFooter() {
    const footer = document.createElement('footer')
    document.body.after(footer)

    const logo = document.createElement('img')
    const list = document.createElement('ul')
    const socialNet = document.createElement('div')
    const headerFooter = document.createElement('div')

    footer.className = 'footer'
    logo.className = 'logo-footer'
    list.className = 'list-footer'
    socialNet.className = 'social-network'
    headerFooter.className = 'header-footer'

    logo.src = '/public/assets/icons/logo-footer.svg'

    list.innerHTML = '<li class="element-list-footer"><a class="element-list-footer-a" href="#">О клинике</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Услуги</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Специалисты</a></li>' + 
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Цены</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Контакты</a></li>'

    socialNet.innerHTML = '<a class="image-footer-first" href="#"><img src="/public/assets/icons/instagram.svg"/></a>' +
                        '<a class="image-footer" href="#"><img src="/public/assets/icons/watsapp.svg"/></a>' +
                        '<a class="image-footer" href="#"><img src="/public/assets/icons/telegram.png"/></a>'

    footer.append(headerFooter)    

    headerFooter.append(logo)
    headerFooter.append(socialNet)

    footer.append(list)
}