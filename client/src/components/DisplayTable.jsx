import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const DisplayTable = (props) => {
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/songs/${deleteId}`)
            .then(response=>props.reloadList())
            .catch(err=>console.log(err))
    }

    const handleDelete2 = (deleteId) => {
        axios.delete(`http://localhost:8000/api/songs/${deleteId}`)
            .then(response=>{
                const filteredList = props.songs.filter((song, i)=>song._id !== deleteId)
                props.updateList(filteredList)
            })
            .catch(err=>console.log(err))
    }


    return (
        <fieldset>
            <legend> DisplayTable.jsx</legend>
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
                        props.songs.map((eachSong, i) => {
                            return (
                                <tr key={i}>
                                    <td> <Link to={"/songs/" + eachSong._id} >{eachSong.title}</Link></td>
                                    <td> {eachSong.artist}</td>
                                    <td> {eachSong.rating}</td>
                                    <td> <Link to={`/songs/${eachSong._id}/edit`}> Edit</Link></td>
                                    <td> <button onClick={()=> handleDelete(eachSong._id)}>Delete</button></td>
                                    <td> <button onClick={()=> handleDelete2(eachSong._id)}>Delete 2</button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default DisplayTable