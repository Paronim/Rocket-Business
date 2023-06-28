import { createElementButton } from "./buttonBlock.js";

let counterSlides = 1

function arrowRightEvent () {
    
    const slides = document.getElementsByClassName('slider-cart')

    
    if(counterSlides < slides.length){
    for(let slide of slides){
        if(Number(slide.id) === counterSlides)
            slide.style.display = 'none'
        
        if(Number(slide.id) === counterSlides + 1)
            slide.style = 'none'
    }

        counterSlides++
        document.querySelector('.counter-first').textContent = counterSlides
    }
        
}

function arrowLeftEvent () {
    const slides = document.getElementsByClassName('slider-cart')

    if(counterSlides > 1){
    for(let slide of slides){
        if(Number(slide.id) === counterSlides)
            slide.style.display = 'none'
        
        if(Number(slide.id) === counterSlides - 1)
            slide.style = 'none'
    }
        counterSlides--
        document.querySelector('.counter-first').textContent = counterSlides
    }
        
}

export function createElementSlider (element, data) {

    const slider = document.createElement('section')
    const sliderMenu = document.createElement('div')

    slider.className = 'slider'
    sliderMenu.className = 'slider-menu'

    element.append(slider)

        try{
            data[1].data.content.forEach(el => {
                const sliderCart = document.createElement('div')
                const image = document.createElement('img')
                const title = document.createElement('h2')
                const content = document.createElement('p')
                const list = document.createElement('ul')
                const cost = document.createElement('div')
                const buttonWrapper = document.createElement('div')
                const wrapper = document.createElement('div')

                sliderCart.className = 'slider-cart'
                sliderCart.id = el.id
                image.className = 'img-slider'
                title.className = 'title-slider'
                content.className = 'content-slider'
                list.className = 'list-slider'
                cost.className = 'cost-sale-slider'
                buttonWrapper.className = 'button-wrapper'
                wrapper.className = 'wrapper-slider-information'

                sliderCart.innerHTML = '<div class="gradient"></div>'

                slider.append(sliderCart)
                sliderCart.prepend(wrapper)

                image.src = el.image
                sliderCart.prepend(image)
                
                title.textContent = el.title
                wrapper.append(title)
                
                content.textContent = el.content
                wrapper.append(content)

                wrapper.append(list)

                el.list.forEach(el => {
                    const listElement = document.createElement('li')
                    listElement.className = 'list-element-slider'
                    listElement.innerHTML = `<div class="list-element"><div class="list-bullet"></div>${el}</div>`
                    list.append(listElement)
                })

                wrapper.append(cost)
                
                cost.innerHTML = `
                <p class="cost-slider">Всего ${el.cost}₽</p>
                <p class="sale-slider">${el.sale}₽</p>
                `
                wrapper.append(buttonWrapper)
                createElementButton('Записаться', 1, buttonWrapper)
                createElementButton('Подробнее', 2, buttonWrapper)

                if(el.id != 1) 
                    sliderCart.style.display = 'none'

            });
        } catch {
            console.log('запрос на ленту пуст')
        }

        sliderMenu.innerHTML = `
        <div class="arrow-left"></div>
        <div class="counter">
            <p class="counter-first">1</p>
            <p class="counter-max">/${data[1].data.content.length}</p>
        </div>
        <div class="arrow-right"></div>
        `

        slider.append(sliderMenu)

        const arrowRight = document.querySelector('.arrow-right')
        const arrowLeft = document.querySelector('.arrow-left')

        arrowRight.addEventListener('click', () => {
            arrowRightEvent()
        })

        arrowLeft.addEventListener('click', () => {
            arrowLeftEvent()
        })
}

export default createElementSlider

