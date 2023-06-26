import { createElementButton } from "./buttonBlock.js";

export function createElementSlider (element, data) {

    const slider = document.createElement('div')

    slider.className = 'slider'

    element.append(slider)

        try{
            data[1].data.content.forEach(el => {
                const sliderCart = document.createElement('div')
                const image = document.createElement('img')
                const title = document.createElement('h2')
                const content = document.createElement('p')
                const list = document.createElement('ul')
                const cost = document.createElement('div')

                sliderCart.className = 'slider-cart'
                image.className = 'img-slider'
                title.className = 'title-slider'
                content.className = 'content-slider'
                list.className = 'list-slider'
                cost.className = 'cost-sale-slider'

                slider.append(sliderCart)

                image.src = el.image
                sliderCart.prepend(image)
                
                title.textContent = el.title
                sliderCart.append(title)
                
                content.textContent = el.content
                sliderCart.append(content)

                sliderCart.append(list)

                el.list.forEach(el => {
                    const listElement = document.createElement('li')
                    listElement.className = 'list-element-slider'
                    listElement.textContent = el
                    list.append(listElement)
                })

                sliderCart.append(cost)
                
                cost.innerHTML = `
                <p class="cost-slider">Всего ${el.cost}</p>
                <p class="sale-slider">${el.sale}</p>
                `

                createElementButton('Записаться', 1, sliderCart)
                createElementButton('Подробнее', 2, sliderCart)

                if(el.id != 1) 
                    sliderCart.style = 'display: none'

            });
        } catch {
            console.log('запрос на ленту пуст')
        }

}