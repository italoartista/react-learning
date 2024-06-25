function Menu() {
    return (
        <nav>
            <ul style={{
                display: 'flex',
                padding: '20px',
                gap: '15px',
                listStyle: 'none'
            }}>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}
export default Menu;
