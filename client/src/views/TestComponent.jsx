import React, { useState, useEffect } from 'react'
import axios from "axios"

// get info from backend
// 1. axios to get info
// 2. state
// 3. useEffect

const TestComponent = () => {
    const [message, setMessage] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/test`)
            .then(response=> {
                setMessage(response.data)
                console.log(response.data) 
            }) //sucessful
            .catch(err=>console.log(err))// unsucessful
    }, [])

    return (
        <fieldset>
            <legend> TestComponent.jsx</legend>
            {
                message?
                <h1> {message} </h1>:
                <h1> Loading...</h1>
            }
        </fieldset>
    )
}

export default TestComponent