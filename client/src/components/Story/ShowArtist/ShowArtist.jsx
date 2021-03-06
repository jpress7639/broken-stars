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

    return (
        <Layout>
            <div className="show-artist">
                <h3 className="artist-title">{artist.name} and {artist.disorder}</h3>
                <div className="artist-profile">
                    <img src={artist.profile_img} alt=""></img>
                    <h4>{artist.years}</h4>
                    <p>{artist.story}</p>
                    <div className="button-divs">
                        <button><Link to={`/artists/${artist.id}/edit/`} style={{ textDecoration: 'none', color: 'rgb(239, 239, 218' }}>Update</Link></button>
                        <button><Link to={`/artists/${artist.id}/symptoms/`} style={{ textDecoration: 'none', color: 'rgb(239, 239, 218)' }}>View Artist Symptoms</Link></button>
                    </div>
                    <div className="recos">
                        <img src={artist.work_URL} alt=""></img>
                        <p>Artist's work includes<br></br><em>{artist.work_example}</em></p>
                    </div>

                </div>
                <footer className="resources">
                    <HandleResources
                        {...props}
                        artist={artist} />
                </footer>

            </div>
        </Layout>
    )
}