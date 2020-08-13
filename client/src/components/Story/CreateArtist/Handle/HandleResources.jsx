import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { readAllResources } from '../../../../services/resources'

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

    return(
        <div>
            <h3>Resources for {artist.disorder}:</h3>
            {resources.map((resource) => (<>
                <a href={resource.link}><p>{resource.name}</p></a>
            </>
            ))}
            <Link to={`/artists/${artist.id}/resources/new`}><button>Add New Resource</button></Link>
        </div>
    )
}