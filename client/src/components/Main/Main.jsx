import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { getAllArtists } from "../../services/artists"
import './Main.css'
import Layout from "../Layout/Layout"

export default function Main() {
    const [artists, setStories]  = useState([])

    useEffect(() => {
        displayArtists();
    }, [])
    
    const displayArtists = async () => {
        const artistList = await getAllArtists();
        setStories(artistList);
    }
    
    return (
        <div>
            <Layout>
            <h3>Stories</h3>
            <div className="story-map">
            {artists.map((artist) => (
                 <div className="story-links">
                 <Link to={`/artists/${artist.id}`} style={{textDecoration: 'none', color: 'rgb(239,239,218)'}}><img src={artist.profile_img} alt={artist.name} ></img>
                <h4>{artist.name}</h4></Link>
                </div>  
            ))}
        </div>
        <footer className="create">
        <button className="new-artist"><Link to='/artists/new/create' style={{textDecoration: 'none', color: 'rgb(239,239,218)'}}>Create a New Story</Link></button>
        </footer>
        </Layout>
        </div>
    )
}