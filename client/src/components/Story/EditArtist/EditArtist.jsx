import React, { useState, useEffect } from 'react'
import './EditArtist.css'

export default function EditArtist(props) {
    const [formData, setFormData] = useState({
        name: "",
        profile_img: "",
        years: "",
        disorder: "",
        story: ""
    })

    useEffect(() => {
        defaultFormData()
    }, [props.artist])

    const defaultFormData = () => {
        const artist = props.artist.find((artist) => {
            return artist.id === parseInt(props.match.params.id)
        })
        setFormData({
            name: artist.name,
            profile_img: artist.profile_img,
            years: artist.years,
            disorder: artist.disorder,
            story: artist.story
        })
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setFormData({name: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {id} = props.match.params;
        const updateArtist = await updateArtist(id, formData)
        props.setArtist(
            props.artist.map((artist) => {
                return artist.id === id;
            })
        )
        props.history.push('/artists/:id')
    }

    return(
        <>
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
                Tell Us Your Story:
            <input className="long" type="text" name="story" role="textbox" value={formData.story} onChange={handleChange}/>
            </label>
            <label>
                Feature Work:
            <input type="text" name="work_example" value={formData.work_example} onChange={handleChange}/>
            </label>
            <label>
                Image of Work(with Year of Creation):
            <input type="text" name="work_URL" value={formData.work_URL} onChange={handleChange}/>
            </label>
            <button>Update Story</button>
        </form>
        </>
    )
}