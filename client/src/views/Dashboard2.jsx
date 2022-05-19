import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

// get info from backend automatically 
// 1. axios to get info
// 2. state
// 3. useEffect

const Dashboard2 = () => {
    const [songs, setSongs] = useState([])
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs`)
            .then(response=>{
                console.log(response.data)
                setSongs(response.data)
            })
            .catch(err=>console.log(err))
    },[refresh])

    const handleDelete =(deleteId) =>{
        axios.delete(`http://localhost:8000/api/songs/${deleteId}`)
            .then(response=>{
                setRefresh(!refresh)
            })
            .catch(err=>console.log(err))
    }

    return (
        <fieldset>
            <legend> Dashboard.jsx</legend>
            <table>
                <thead> 
                    <tr>
                        <th> Title</th>
                        <th> Artist</th>
                        <th> Rating</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.map((song, i)=>(
                            <tr key={i}>
                                <td> <Link to={"/songs/"+ song._id} >{song.title}</Link></td>
                                <td> {song.artist}</td>
                                <td> {song.rating}</td>
                                <td> <Link to={`/songs/${song._id}/edit`}> Edit</Link></td>
                                <td> <button onClick={()=>handleDelete(song._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard2