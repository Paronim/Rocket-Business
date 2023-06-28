import { createElementList } from './component_block/listBlock.js'

export function createFooter() {
    const footer = document.createElement('footer')
    document.body.after(footer)

    const logo = document.createElement('img')
    const socialNet = document.createElement('div')
    const wrapperImg = document.createElement('div')

    footer.className = 'footer'
    logo.className = 'logo-footer'
    wrapperImg.className = 'wrapper-logo'
    socialNet.className = 'social-network'

    logo.src = '/public/assets/icons/logo-footer.svg'

    socialNet.innerHTML = '<a href="#"><img class="image-footer" src="/public/assets/icons/instagram.svg"/></a>' +
                        '<a class="image-footer-a" href="#"><img class="image-footer" src="/public/assets/icons/watsapp.svg"/></a>' +
                        '<a class="image-footer-a" href="#"><img class="image-footer" src="/public/assets/icons/telegram.png"/></a>'


    footer.append(wrapperImg)
    wrapperImg.append(logo)
    footer.append(socialNet)

    createElementList(footer, 'footer')

}