import { useState } from 'react'

function Search(  { sugestions }) {
    const [search, setSearch] = useState('')
    const [filteredSugestions, setFilteredSugestions] = useState([])
    return (
        <>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar...' />
            <p>Pruduto: {search}</p>

            <ul>
                {
                    filteredSugestions.map((sugestion, index) => <li key={index}>{sugestion}</li>)
                }
                </ul>
        </>
    )
}

export default Search;