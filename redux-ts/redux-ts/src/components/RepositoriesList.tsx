import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';

const RepositoriesList = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState('')

    const { searchRepositories } = useActions();
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        searchRepositories(term)
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            {term}
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
    )};
export default RepositoriesList;