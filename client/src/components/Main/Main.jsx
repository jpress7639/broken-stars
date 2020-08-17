import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { getAllArtists } from "../../services/artists"
import './Main.css'
import Layout from "../Layout/Layout"

export default function Main() {
    const [artists, setStories]  = useState([])
    const [searched, setSearch] = useState([])

    useEffect(() => {
        displayArtists();
        setSearch("")
    }, [])
    
    const displayArtists = async () => {
        const artistList = await getAllArtists();
        setStories(artistList);
    }

   const handleSearch = event => {
       const queriedStories = artists.filter(artist => artist.name.toLowerCase().includes(event.target.value.toLowerCase()))
       setSearch(queriedStories)
   }

    
    
    return (
        <div>
            <Layout>
            <h3>Stories</h3>
            <input onChange={handleSearch} className="search" name="search" placeholder="Search for a Story!"/>
            <div className="story-map">
            {searched === "" ? artists.map((artist) => (
                 <div className="story-links">
                 <Link to={`/artists/${artist.id}`} style={{textDecoration: 'none', color: 'rgb(239,239,218)'}}><img src={artist.profile_img} alt={artist.name} ></img>
                <h4>{artist.name}</h4></Link>
                </div>  
            ))
            : searched.map((artist) => (
                <div className="story-links">
                 <Link to={`/artists/${artist.id}`} style={{textDecoration: 'none', color: 'rgb(239,239,218)'}}><img src={artist.profile_img} alt={artist.name} ></img>
                <h4>{artist.name}</h4></Link>
                </div>  
            ))
            }
        </div>
        <footer className="create">
        <button className="new-artist"><Link to='/artists/new/create' style={{textDecoration: 'none', color: 'rgb(239,239,218)'}}>Create a New Story</Link></button>
        </footer>
        </Layout>
        </div>
    )
}