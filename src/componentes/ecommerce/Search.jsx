import { useState } from 'react'

function Search(  { sugestions }) {
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState(sugestions)
    const [filteredSugestions, setFilteredSugestions] = useState([])


    function handleSearch(e) {
        setSearch(e.target.value)
        setFilteredSugestions(suggestions.filter(sugestion => sugestion.includes(search)))
    }
    return (
        <>
            <input type='text' value={search} onChange={(e)=> handleSearch(e)} placeholder='Buscar...' />
            <p>Pruduto: {search}</p>
            <ul>
                {
                    filteredSugestions.map((sugestion) => <li key={sugestion}>{sugestion}</li>) 
                }
            </ul>
        </>
    )
}

export default Search;