import React, { useEffect, useState } from 'react'
import axios from "axios"
import CreateForm from '../components/CreateForm'
import DisplayTable from '../components/DisplayTable'

// 1. grab info from backend automatically
// useEffect, useState, axios


const Main = () => {
    const [songs, setSongs] = useState([])
    const [refresh, setRefresh] = useState(true)

    // grabbing all songs for DisplayTable
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs`)
            .then(response=>{
                setSongs(response.data)
            })
            .catch(err=>console.log(err))
    },[refresh])

    // handleDelete1 & create function
    const reload = ()=>{
        setRefresh(!refresh)
    }

    // handleDelete2 
    const updateList = (list) =>{
        setSongs(list)
    }

    return (
        <fieldset>
            <legend> Main.jsx</legend>
            <CreateForm reloadList = {reload}/>
            <DisplayTable songs={songs} reloadList = {reload} updateList={updateList} />
            <button onClick={reload}> reload </button>
        </fieldset>
    )
}

export default Main