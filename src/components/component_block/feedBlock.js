export function createElementFeed () {
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

    feed.prepend(main)

    try{
    content.content.forEach(el => {
        feedCart.append(feed)

        image.src = el.image
        feedCart.append(image)
        
        title.innerHTML = el.title
        feedCart.append(title)
        
        content.innerHTML = el.content
        feedCart.append(content)

    });
    } catch {
        console.log('запрос на ленту пуст')
    }
}
