import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateForm = (props) => {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [rating, setRating] = useState(3)
    const [errors, setErrors] = useState([])
    
    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/songs`, {title, artist, rating})
            .then(response=>{
                console.log(response)
                props.reloadList()
                clearForm()
            })
            .catch(err=>{
                const errArr =[]
                const errResData = err.response.data.errors
                console.log(errResData)
                for(const key in errResData){
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }   

    const clearForm = () =>{
        setTitle("")
        setArtist("")
        setRating(3)
    }

    return (
        <fieldset>
            <legend> CreateForm.jsx</legend>
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
            {
                errors.map((err, i)=>(
                    <p key={i} style={{color: "red"}}> {err} </p>
                ))
            }
        </fieldset>
    )
}

export default CreateForm