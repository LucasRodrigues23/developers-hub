export const setToken = (token) => {
    localStorage.setItem('@kenzie-hub:', JSON.stringify(token))
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub:')) || []
}

export const clearToken = () => {
    localStorage.removeItem('@kenzie-hub:')
}

export const setDarkMode = (theme) => {
    localStorage.setItem('@kenzie-hub-dark-mode:', JSON.stringify(theme))
}

export const getDarkMode = () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub-dark-mode:')) || []
}