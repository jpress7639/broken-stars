import React, { useState, useEffect } from "react"
import { readAllSymptoms, destroySymptom, createSymptom } from "../../../../services/symptoms"
import { getOneArtist } from "../../../../services/artists"
import Layout from "../../../Layout/Layout"
import './HandleSymptoms.css'
import HandleResources from "./HandleResources"


export default function HandleSymptoms(props) {
    const [symptoms, setSymptoms] = useState([])
    const [artist, setArtist] = useState([])
    const [symptom, newSymptom] = useState({
        name: ""
    })

    useEffect(() => {
        getArtist()
        getSymptoms()
    }, [])

    const getArtist = async () => {
        const artistDetail = await getOneArtist(props.match.params.id);
        setArtist(artistDetail);
    }


    const getSymptoms = async () => {
        const symptomList = await readAllSymptoms(props.match.params.id)
        setSymptoms(symptomList)
    }

    const handleClick = async (id) => {
        await destroySymptom(artist.id, id)
        setSymptoms(symptoms.filter((symptom) => {
            return symptom.id !== id
        }))
    }

    const handleChange = (e) => {
        const { value } = e.target;
        newSymptom({ name: value })
    }

    const clearInput = () => {
        newSymptom({
            name: ""
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const addSymptom = await createSymptom(symptom, artist.id);
        setSymptoms([...symptoms, addSymptom])
        clearInput()
    }

    return (
        <div>
            <Layout>
                <h3 className="symptom-header">{artist.name}'s Main Symptoms</h3>
                <div className="symptom-list">
                    {symptoms && symptoms.map((symptom) => (
                        <div className="modify"><p>{symptom.name}<button onClick={() => handleClick(symptom.id)}>X</button></p></div>
                    ))}
                </div>
                <form className="add-symptom">
                    <label>
                        New Symptom
                <input type="text" name="name" value={symptom.name} onChange={handleChange} required />
                    </label>
                    <button onClick={handleSubmit}>Add Symptom</button>
                </form>
                <footer>
                    <HandleResources
                        {...props}
                        artist={artist} />
                </footer>
            </Layout>
        </div>
    )
}