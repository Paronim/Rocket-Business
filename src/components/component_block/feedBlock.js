
export function createElementFeed (element, data) {
    const feed = document.createElement('section')

    feed.className = 'feed'

    element.prepend(feed)

        try{
            data[0].data.content.forEach(el => {
                const feedCart = document.createElement('div')
                const image = document.createElement('img')
                const title = document.createElement('h2')
                const content = document.createElement('p')
                const blockContentCart = document.createElement('div')

                feedCart.className = 'feed-cart'
                image.className = 'img-feed'
                title.className = 'title-feed'
                content.className = 'content-feed'
                blockContentCart.className = 'text-cart-block'

                feed.append(feedCart)
                feedCart.append(blockContentCart)

                image.src = el.image
                feedCart.prepend(image)
                
                title.textContent = el.title
                blockContentCart.append(title)
                
                content.textContent = el.content
                blockContentCart.append(content)
        
            });
        } catch {
            console.log('запрос на ленту пуст')
        }
}
 
