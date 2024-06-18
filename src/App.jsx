
import './App.css'
import ListaNomes from './componentes/ListaNomes'
import Saudacao from './componentes/Saudacao'



function App() {
  const rotulo = 'Mostrar'
  const nome = 'Lucas'
  const lista = ['Lucas', 'Gabriel', 'João', 'Maria', 'José', 'Ana', 'Joana']
  const estilo = { backgroundColor: 'purple', color: 'white', fontSize: '32px' }
  return (

    <>
     
      <Saudacao estilo={estilo} nome={nome} sobrenome='Silva' profissao='Desenvolvedor' rotulo={rotulo} />
    </>


  )
}

export default App
