import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName); 
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
    
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input 
                    type="text"
                    name="name" value={name}
                    onChange={(e) => { setName(e.target.value) }}/>
            </p>
            <Link to={"/"}><button>Cancel</button></Link>
            <input type="submit"/>
        </form>
    )
}
