import React, {useState, useEffect} from 'react'
import { readAllResources } from '../../../../services/resources'
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
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value})
    }

    return(
        <div>
            <Layout>
            <h3>Add A New Resource for {artist.disorder}</h3>
     {resources.map((resource) => (<>
                <a href={resource.link}><p>{resource.name}</p></a>
            </>
            ))}
            <form className="new-resource">
                <label>
                    Name of Resource:
                <input type="text" name="name" onChange={handleChange}/>
                </label>
              <label>
                  Link to Resource:
              <input type="text" name="link"onChange={handleChange}/>
              </label>
                <button>Add Resource</button>
            </form>
            </Layout>
        </div>
    )
}