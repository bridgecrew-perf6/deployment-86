import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

// have form, send info to backend after submit
// backend : axios
// form: state (for each input, one state)
// after creating, redirect to dashboard (navigate)

const Create = () => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(3)
    const navigate = useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating})
            .then(response=>navigate(`/songs`))
            .catch(err=>console.log(err.response.data))
    }

    return (
        <fieldset>
            <legend> Create.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Artist</label>
                    <input type="text" name="artist" value={artist}
                        onChange={e=>setArtist(e.target.value)} />
                </div>
                <div>
                    <label> Rating</label>
                    <input type="number" name="rating" value={rating}
                        onChange={e=>setRating(e.target.value)} />
                </div>
                <button type="submit">Create a new song</button>
            </form>


        </fieldset>
    )
}

export default Create