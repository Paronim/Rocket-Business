import axios from 'https://cdn.skypack.dev/axios'; 

export async function request () {
    await axios.get('data/feed.json').then(res => {
        console.log(res)
    }).catch(error => console.log(error))
}
