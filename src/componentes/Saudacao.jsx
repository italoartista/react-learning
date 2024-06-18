import Botao from './Botao';

function Saudacao({ nome, sobrenome, profissao, estilo, rotulo }) {
    
    let style = { color: 'red', fontSize: '50px' }
    return (
        <>
            <h1 style={style}>Olá,  eu sou {nome} {sobrenome}!</h1>
            <h2>Eu sou {profissao}</h2>
            <Botao estilo={estilo} rotulo={rotulo} />
        </>
    )
}

export default Saudacao;