import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router';

export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>Home</Link>
            <h3>Update this author:</h3>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                </>
            )}
        </div>
    )
}
