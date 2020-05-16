import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm'

export default props => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setAuthor(res.data)
                setLoaded(true);
            });
    }, [])
    
    const createAuthor = person => {
        axios.post('http://localhost:8000/api/author', person)
            .then(res=>{
                setAuthor([...author, res.data]);
            })
            .then(res=>console.log(res)) // If successful, do something with the response. 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>Home</Link>
            <h3>Add a new author:</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
        </div>
    )
}
