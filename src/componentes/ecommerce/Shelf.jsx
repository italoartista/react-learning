

function Shelf(props) {
    console.log(props)
    return (
        <div>
            <h1>Shelf</h1>
            <ul style={{ listStyle: 'none' }}>
                {
                    props.produtos.map((produto, index) => {
                        return <li key={index}> {produto.nome} </li>
                    })
                }
            </ul>
        </div>
    );
}
export default Shelf;