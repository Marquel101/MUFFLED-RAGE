import api from "./apiConfig";

export const getPosts = async () => {
    const resp = await api.get('/posts')
    return resp.data
}

export const postPost = async (postData) => {
    const resp = await api.post('/posts', { post : postData})
    return resp.data
}

export const deletePost = async (id) => {
    await api.delete(`/posts/${id}`)
}

export const putPost = async (id,formData) => {
    const resp = await api.put(`/foods/${id}`, {post : formData})
    return resp.data
}