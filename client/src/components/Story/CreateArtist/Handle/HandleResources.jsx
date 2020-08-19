import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { readAllResources } from '../../../../services/resources'
import '../../../Layout/Footer/Footer.css'

export default function HandleResources(props) {
    const [resources, setResources] = useState([])
    const artist = props.artist

    useEffect(() => {
        getResources()
    }, [])

    const getResources = async () => {
        const resourceList = await readAllResources(props.match.params.id)
        setResources(resourceList)
    }

    return (
        <div className="resources">
            <h3>Resources for {artist.disorder}:</h3>
            <div className="links">
                {resources.map((resource) => (

                    <a className="footer-links" href={resource.link}><p>{resource.name}</p></a>
                ))}
            </div>
            <button><Link to={`/artists/${artist.id}/resources/new`} style={{ textDecoration: 'none', color: 'rgb(239,239,218)' }}>Add New Resource</Link></button>
        </div>
    )
}