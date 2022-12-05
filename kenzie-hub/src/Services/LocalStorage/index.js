export const setToken = (token) => {
    localStorage.setItem('@kenzie-hub-token:', JSON.stringify(token))
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub-token:')) || null
}

export const clearToken = () => {
    localStorage.removeItem('@kenzie-hub-token:')
}

export const setUserId = (userId) => {
    localStorage.setItem('@kenzie-hub-id:', JSON.stringify(userId))
}

export const getUserId= () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub-id:')) || null
}

export const clearUserId = () => {
    localStorage.removeItem('@kenzie-hub-id:')
}

export const setDarkMode = (theme) => {
    localStorage.setItem('@kenzie-hub-dark-mode:', JSON.stringify(theme))
}

export const getDarkMode = () => {
    return JSON.parse(localStorage.getItem('@kenzie-hub-dark-mode:')) || []
}

