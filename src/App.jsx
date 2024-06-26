import { useState } from 'react'
import './App.css'

import Search from './componentes/ecommerce/Search'

function App() {
  
 
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

    </>


  )
}

export default App
