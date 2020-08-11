import api from './api-helper'

export const readAllResources = async () => {
    const resp = await api.get('/artists/:artist_id/resources')
    return resp.data;
}

export const readOneResource = async (id) => {
    const resp = await api.get(`/artists/:artist_id/resources/${id}`)
    return resp.data;
}

export const createResource = async (resourceData) => {
    const resp = await api.post('/artists/:artist_id/resources', resourceData)
    return resp.data;
}

export const destroyResource = async(id) => {
    const resp = await api.delete(`/artists/:artist_id/resources/${id}`)
    return resp;
}
