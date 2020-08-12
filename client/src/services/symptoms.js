import api from './api-helper'


export const readAllSymptoms = async () => {
    const resp = await api.get(`/artists/:artist_id/symptoms`)
    return resp.data;
}

export const readOneSymptom = async (id) => {
    const resp = await api.get(`/artists/:artist_id/symptoms/${id}`)
    return resp.data;
}

export const createSymptom = async (symptomData) => {
    const resp = await api.post('/artists/:artist_id/symptom', symptomData)
    return resp.data;
}

export const destroySymptom = async(id) => {
    const resp = await api.delete(`/artists/:artist_id/symptoms/${id}`)
    return resp;
}