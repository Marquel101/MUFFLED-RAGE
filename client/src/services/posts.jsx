import api from "./apiConfig";

export const getPosts = async () => {
    const resp = await api.get('/posts')
    return resp.data
}