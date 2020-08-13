import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOneArtist } from '../../../services/artists'
import HandleResources from '../CreateArtist/Handle/HandleResources'
import Layout from '../../Layout/Layout'
import './ShowArtist.css'

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
        <Layout>
            <div className="show-artist">
             <h3>{artist.name} and {artist.disorder}</h3>
             <h4>{artist.years}</h4>
        <div className="artist-profile">
    <img src={artist.profile_img}></img>
    <p>{artist.story}</p>
    <div className="button-divs">
    <button><Link to={`/artists/${artist.id}/edit/`} style={{textDecoration: 'none', color: 'black'}}>Update</Link></button>
    <button><Link to={`/artists/${artist.id}/symptoms/`} style={{textDecoration: 'none', color: 'black'}}>View Artist Symptoms</Link></button>
    </div>
    <div className="recos">
    <img src={artist.work_URL}></img>
    <p>Check out <br></br><em>{artist.work_example}</em></p>
    </div>
   
    </div>
    <footer>
    <HandleResources 
    {...props}
    artist={artist}/>
    </footer>
    
        </div>
        </Layout>
    )
}