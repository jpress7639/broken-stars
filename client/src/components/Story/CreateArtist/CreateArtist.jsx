import React, {useState} from 'react'
import { postArtist } from '../../../services/artists'
import './CreateArtist.css'
import Layout from '../../Layout/Layout'

export default function CreateArtist(props) {
    const [formData, setFormData] = useState({
        name: "", 
        profile_img: "",
        years: "",
        disorder: "",
        work_example: "",
        work_URL: "",
        story: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postArtist(formData)
        alert(`Artist Created!`)
        props.history.push(`/home`)
    }

    return(
        <>
        <Layout>
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
                
                Feature Work (with Year of Creation):
            <input type="text" name="work_example" value={formData.work_example} onChange={handleChange}/>
            </label>
            <label>
                Image of Work:
            <input type="text" name="work_URL" value={formData.work_URL} onChange={handleChange}/>
            </label>
            <textarea className="long" type="text" name="story" rows="8" cols="50" placeholder="Tell us your story..." value={formData.story} onChange={handleChange}/>
           <button>Add Story</button>
        </form>
        </Layout>
        </>
    )
}