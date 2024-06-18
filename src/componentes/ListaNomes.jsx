function ListaNomes(props) {
    console.log(props)
    return (
        <ul>
            {
                props.nomes.filter(nome => nome.includes('na')).map((nome, index) => {
                    return <li key={index}>{nome}</li>
                })
            }
        </ul>
    )
}

export default ListaNomes;