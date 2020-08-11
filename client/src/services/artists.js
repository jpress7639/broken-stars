import api from "./api-helper"

export const getAllArtists = async () => {
    const resp = await api.get('/artists')
    return resp.data;
}

export const getOneArtist = async () => {
    const resp = await api.get(`/artists/${id}`)
    return resp.data;
}

export const postArtist = async (artistData) => {
    const resp = await api.post('/artists', artistData)
    return resp.data;
}

export const updateArtist = async (id, artistData) => {
    const resp = await api.put(`artists/${id}`, {artist: artistData})
    return resp.data;
}

export const destroyArtist = async (id) => {
    const resp = await api.delete(`/artists/${id}`)
    return resp;
}
