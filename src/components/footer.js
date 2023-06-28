
export function createFooter() {
    const footer = document.createElement('footer')
    document.body.after(footer)

    const logo = document.createElement('img')
    const list = document.createElement('ul')
    const socialNet = document.createElement('div')
    const wrapperImg = document.createElement('div')

    footer.className = 'footer'
    logo.className = 'logo-footer'
    wrapperImg.className = 'wrapper-logo'
    list.className = 'list-footer'
    socialNet.className = 'social-network'

    logo.src = '/public/assets/icons/logo-footer.svg'

    list.innerHTML = '<li class="element-list-footer"><a class="element-list-footer-a" href="#">О клинике</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Услуги</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Специалисты</a></li>' + 
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Цены</a></li>' +
                    '<li class="element-list-footer"><a class="element-list-footer-a" href="#">Контакты</a></li>'

    socialNet.innerHTML = '<a href="#"><img class="image-footer" src="/public/assets/icons/instagram.svg"/></a>' +
                        '<a class="image-footer-a" href="#"><img class="image-footer" src="/public/assets/icons/watsapp.svg"/></a>' +
                        '<a class="image-footer-a" href="#"><img class="image-footer" src="/public/assets/icons/telegram.png"/></a>'


    footer.append(wrapperImg)
    wrapperImg.append(logo)
    footer.append(socialNet)

    footer.append(list)
}