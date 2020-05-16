import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const [stuff, setStuff] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setStuff(res.data));
    }, [stuff])

    const removeFromDom = authorId => {
        setStuff(stuff.filter(author => author._id != authorId))
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            {stuff.map((author, idx) => {
                return (
                    <tr key={idx}>
                    <td>{author.name}</td>
                    <td>
                        <Link to={"/" + author._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </td>
                    </tr>
                )
            })}
            </table>
        </div>
    )
}