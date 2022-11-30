export const setToken = (token) => {
    localStorage.setItem('@kenzie-hub:', JSON.stringify(token))
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub:')) || []
}

export const clearToken = () => {
    localStorage.removeItem('@kenzie-hub:')
}