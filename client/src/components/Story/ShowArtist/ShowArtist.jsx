import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOneArtist } from '../../../services/artists'

export default function ShowArtist(props) {
    const [artist, setArtist] = useState([])

    useEffect(() => {
        getArtist()
    }, [])

    const getArtist = async () => {
        const artistDetail = await getOneArtist(props.match.params.id);
        setArtist(artistDetail);
    }

    return(
        <div className="artist-profile">
    <h3>{artist.name}</h3>
    <img src={artist.profile_img}></img>
    <h4>{artist.years}</h4>
    <h4>{artist.disorder}</h4>
    <p>{artist.story}</p>
    <img src={artist.work_URL}></img>
    <p>{artist.work_example}</p>
    <Link to={`/artists/${artist.id}/edit/`}><button>Update</button></Link>
    <Link to={`/artists/${artist.id}/symptoms/`}><button>View Artist Symptoms</button></Link>
        </div>
    )
}