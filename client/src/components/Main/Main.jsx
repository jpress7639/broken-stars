import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { getAllArtists } from "../../services/artists"
import './Main.css'

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
            <h3>Stories</h3>
            <div className="story-map">
            {artists.map((artist) => (
                 <div className="story-links">
                 <Link to={`/artists/${artist.id}`}><img src={artist.profile_img} alt={artist.name}></img>
                <h4>{artist.name}</h4></Link>
                </div>  
            ))}
        </div>
        <Link to='/artists/new'><button>Create a New Story</button></Link>
        </div>
    )
}