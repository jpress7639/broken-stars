import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { postArtist } from '../../../services/artists'

export default function CreateArtist(props) {
    const [formData, setFormData] = useState({
        name: ""
    })

    const handleChange = (e) => {
        const {value} = e.target
        setFormData({name: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newArtist = await postArtist(formData)
        props.setFoods({
            ...props.artist,
            newArtist
        })
        alert(`Artist Created!`)
        props.history.push('/artists')
    }

    return(
        <>
        <form className="create-form" onSubmit={handleSubmit}>
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
            <input className="long" type="text" name="story" value={formData.story} onChange={handleChange}/>
            </label>
            <label>
                Feature Work (with Year of Creation):
            <input type="text" name="work_example" value={formData.work_example} onChange={handleChange}/>
            </label>
            <label>
                Image of Work:
            <input type="text" name="work_URL" value={formData.work_URL} onChange={handleChange}/>
            </label>
            <Link to={`/artists/:new_id/symptoms`}><button>Add Your Symptoms</button></Link>
        </form>
        </>
    )
}