import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);
            });
    }, [people])
    const removeFromDom = authorId => {
        setPeople(people.filter(author => author._id != author));
    }
    // const createAuthor = author => {
    //     axios.post('http://localhost:8000/api/author', author)
    //         .then(res=>{
    //             setPeople([...people, res.data]);
    //         })
    // }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/new"}>add an author</Link>
            <h3>We have quotes by:</h3>
            {/* <AuthorForm onSubmitProp={createAuthor} initialName=""/> */}
            <hr/>
            {loaded && <AuthorList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
