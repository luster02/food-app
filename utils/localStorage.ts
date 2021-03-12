const key = 'user-date'

export function setUserItem(item: string) {
    localStorage.setItem(key, item)
}

export function getUserItem() {
    const Item = localStorage.getItem(key)
    if (!Item) return null
    return Item
}

export function deleteUserItem() {
    localStorage.removeItem(key)
}