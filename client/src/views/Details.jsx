import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

// grab info from route, then from backend when loading the component
// backend: axios
// when loading: useEffect
// store the info from backend: useState
// route inside frontend: params

const Details = () => {
    const {id} = useParams()
    const [song, setSong] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs/${id}`)
            .then(response=>setSong(response.data))
            .catch(err=>console.log(err))
    },[])


    return (
        <fieldset>
            <legend> Details.jsx</legend>
            {
                song&&
                <div>
                    <h3> Song title: {song.title} </h3>
                    <h3> Artist: {song.artist} </h3>
                    <h3> Rating: {song.rating} </h3>
                </div>
            }
            
        </fieldset>
    )
}

export default Details