import React, {useState, useEffect} from 'react'
import { readAllResources } from '../../../../services/resources'
import { getOneArtist } from '../../../../services/artists'



export default function AddResource(props) {
    const [artist, getArtist] = useState([])
    const [resources, listResources] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        link: ""
    })

    useEffect(() => {
        listArtist()
        getResources()
    }, [])

    const getResources = async () => {
        const resourceList = await readAllResources(props.match.params.id)
        listResources(resourceList)
    }

    const listArtist = async () => {
        const singleArtist = await getOneArtist(props.match.params.id)
        getArtist(singleArtist)
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value})
    }

    return(
        <div>
            <h3>Add A New Resource for {artist.disorder}</h3>
     {resources.map((resource) => (<>
                <a href={resource.link}><p>{resource.name}</p></a>
            </>
            ))}
            <form>
                <input type="text" name="name" onChange={handleChange}/>
                <input type="text" name="link"onChange={handleChange}/>
                <button>Add Resource</button>
            </form>
        </div>
    )
}