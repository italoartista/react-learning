import { useState } from 'react'
import './App.css'
// import ListaNomes from './componentes/ListaNomes'
// import Saudacao from './componentes/Saudacao'
// import Layout from './componentes/layout/Layout'
// import Shelf from './componentes/ecommerce/Shelf'
import Search from './componentes/ecommerce/Search'

function Contador({ onAtualizaContador, contador }) {


  return (
    <>
      <h1>{contador}</h1>
      <button onClick={() => onAtualizaContador(contador + 1)}>+</button>
      <button onClick={() => onAtualizaContador(contador - 1)}>-</button>  
    </>
  )
}
function App() {
  
  // const produtos = [
  //   { id: 1, nome: 'Camisa', preco: 50.9999 },
  //   { id: 2, nome: 'Calça', preco: 100.213801238 },
  //   { id: 3, nome: 'Tênis', preco: 200.2389403892 }
  // ]
  const sugestoes = ['Camisa', 
          'Calça', 
          'Tênis', 
          'Meia', 
          'Boné',
          'Cueca',
          'Sunga',
          'Sapato',
          'Sandália',
          'Chinelo',
          'Gravata', 
          'Cinto',
          'Relógio',
          'Pulseira',
          'Óculos',
          'Perfume',
          'Carteira',
          'Mochila',
          'Colar',
          'Brinco',
          'Anel',
          'Bolsa',
          'Chapéu',
          'Luva',
          'Skate',
          'Jaqueta',
          'Blusa',
          'Short',
          'Moletom',
          'Meião',
          'Regata'
        ]
  return (

    <>
      <Search sugestions={sugestoes}/>
      {/* <Shelf produtos={produtos}  nome='Produtos mais vendidos' /> */}
    </>


  )
}

export default App
