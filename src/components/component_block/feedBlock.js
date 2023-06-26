
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

    element.prepend(feed)

        try{
            data[0].data.content.forEach(el => {
                feed.append(feedCart)
        
                image.src = el.image
                feedCart.append(image)
                
                title.textContent = el.title
                feedCart.append(title)
                
                content.textContent = el.content
                feedCart.append(content)
        
            });
        } catch {
            console.log('запрос на ленту пуст')
        }
}
 
