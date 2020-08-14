import React, { useState, useEffect } from 'react'
import { updateArtist, destroyArtist } from '../../../services/artists'
import './EditArtist.css'
import Layout from '../../Layout/Layout'

export default function EditArtist(props) {
    const [formData, setFormData] = useState({
       name: ""
    })

    useEffect(() => {
        if (props.artist.length > 0) {
            defaultFormData()
        }
    }, [props.artist])

    const defaultFormData = () => {
        console.log(props.artist)
        const artist = props.artist.find((artist) => {
            return artist.id === parseInt(props.match.params.id)
        })
        console.log(artist)
        setFormData({
            name: artist.name,
            profile_img: artist.profile_img,
            years: artist.years,
            disorder: artist.disorder,
            story: artist.story,
            work_example: artist.work_example,
            work_URL: artist.work_URL
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {id} = props.match.params;
        const changeArtist = await updateArtist(id, formData)
        // props.setArtist(
        //     props.artist.map((artist) => {
        //         return artist.id === id;
        //     })
        // )
        alert('Artist Story Updated!')
        props.history.push(`/artists/${changeArtist.id}`)
    }

    const handleClick = async () => {
        await destroyArtist(props.match.params.id)
        props.history.push(`/`)
    }

    return(
        <>
        <Layout>
        <form className="edit-form" onSubmit={handleSubmit}>
            <label>
                Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
                Image:
            <input type="text" name="profile_img" value={formData.profile_img} onChange={handleChange}/>
            </label>
            <label>
                Birth Year (and Death Year if applicable):
            <input type="text" name="years" value={formData.years} onChange={handleChange}/>
            </label>
            <label>
                Disorder:
            <input type="text" name="disorder" value={formData.disorder} onChange={handleChange}/>
            </label>
            <label>
                Feature Work (with Year of Creation):
            <input type="text" name="work_example" value={formData.work_example} onChange={handleChange}/>
            </label>
            <label>
                Image of Work:
            <input type="text" name="work_URL" value={formData.work_URL} onChange={handleChange}/>
            </label>
            <textarea className="long" type="text" name="story" rows="8" cols="50" value={formData.story} onChange={handleChange}/>
            <button>Update Story</button>
        </form>
        <button className="delete-button" onClick={handleClick}>Delete Artist</button>
        </Layout>
        </>
    )
}