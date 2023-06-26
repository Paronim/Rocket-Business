
export function createElementFeed (element, data) {
    const feed = document.createElement('div')
    const feedCart = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h2')
    const content = document.createElement('p')

    feed.className = 'feed'
    feedCart.className = 'feed-cart'
    image.className = 'img-feed'
    title.className = 'title-feed'
    content.className = 'content-feed'

    feedCart.innerHTML = '<div class="text-cart-block"></div>'

    element.prepend(feed)

        try{
            data[0].data.content.forEach(el => {
                feed.append(feedCart)

                image.src = el.image
                feedCart.prepend(image)
                
                title.textContent = el.title
                document.querySelector('.text-cart-block').append(title)
                
                content.textContent = el.content
                document.querySelector('.text-cart-block').append(content)
        
            });
        } catch {
            console.log('запрос на ленту пуст')
        }
}
 
