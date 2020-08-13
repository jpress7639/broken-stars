import React, {useState, useEffect} from "react"
import { readAllSymptoms, destroySymptom, createSymptom } from "../../../../services/symptoms"
import { getOneArtist } from "../../../../services/artists"


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
        const {value} = e.target;
        newSymptom({name: value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const addSymptom = await createSymptom(symptom, artist.id);
        setSymptoms([...symptoms, addSymptom])

    }

    return(
        <div>
        <h3>{artist.name}'s Symptoms</h3>
        {symptoms && symptoms.map((symptom) => (
            <p>{symptom.name}<div className="modify"><button onClick={() => handleClick(symptom.id)}>Delete</button></div></p>
        ))}
        <form>
            <label>
                New Symptom
                <input type="text" name="name" onChange={handleChange}/>
            </label>
            <button onClick={handleSubmit}>Add Symptom</button>
        </form>
        </div>
    )
}