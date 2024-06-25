function Shelf({ produtos, nome }) {
    return (
        <div>
            <h1>Shelf</h1>
            <ul>
                {
                    produtos.map((produto) => <li key={produto.id}>{produto.nome} - R$ {produto.preco.toFixed(2)} <button>Comprar</button></li>)

                }
            </ul>
        </div>
    );
}
export default Shelf;