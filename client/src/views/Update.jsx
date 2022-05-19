import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

// getOne + create
// get song id from routes (params)
// using id to go to the backend (axios)
// state


const Update = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [rating, setRating] = useState(3)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/songs/${id}`)
      .then(response=>{
        const song = response.data // song= {title: ...., artist:.... rating:...}
        setTitle(song.title)
        setArtist(song.artist)
        setRating(song.rating)
      })
      .catch(err=>console.log(err))
  },[])

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/songs/${id}`,{ title, artist, rating})
      .then(response=>navigate(`/songs`))
      .catch(err=>console.log(err))
  }

  const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/songs/${id}`)
      .then(response=>navigate(`/songs`))
      .catch()
  }


  return (
    <fieldset>
      <legend> Update.jsx</legend>
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
                <button type="submit">Update the song</button>
            </form>

            <button onClick={handleDelete}> Delete</button>

    </fieldset>
  )
}

export default Update