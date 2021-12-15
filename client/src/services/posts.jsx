import api from "./apiConfig";

export const getPosts = async () => {
    const resp = await api.get('/posts')
    return resp.data
}

export const postPost = async post => {
    const resp = await api.post('/posts', post)
    return resp.data
}