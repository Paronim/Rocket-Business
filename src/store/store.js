
let store = []

export function storeSet (data) {
    store.push(data)
}

export function storeGet () {
    return store
}