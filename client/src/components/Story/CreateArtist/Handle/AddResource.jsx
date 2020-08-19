import React, { useState, useEffect } from 'react'
import { readAllResources, createResource } from '../../../../services/resources'
import { getOneArtist } from '../../../../services/artists'
import './AddResources.css'
import Layout from '../../../Layout/Layout'



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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const addResource = await createResource(artist.id, formData);
        listResources([...resources, addResource])
        clearInput()
    }

    const clearInput = () => {
        setFormData({
            name: "",
            link: ""
        })
    }
    return (
        <div>
            <Layout>
                <h3 className="instructions">Add A New Resource for {artist.disorder}</h3>
                {resources.map((resource) => (<div>
                    <a className="resource-list" href={resource.link}><p>{resource.name}</p></a>
                </div>
                ))}
                <form onSubmit={handleSubmit} className="new-resource">
                    <label>
                        Name of Resource:
                <input type="text" value={formData.name} name="name" onChange={handleChange} />
                    </label>
                    <label>
                        Link to Resource:
              <input type="text" value={formData.link} name="link" onChange={handleChange} />
                    </label>
                    <button>Add Resource</button>
                </form>
            </Layout>
        </div>
    )
}