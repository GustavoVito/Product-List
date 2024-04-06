import React from 'react'
import {Text} from 'react-native'
import estilo from '../src/estilo'
import Produtos from './Produtos'


export default comp => {
  function obterlista(){
    return Produtos.map(p => {
      return(
        <Text key={p.id}>
          {p.id} {p.nome}
          Valor do produto R$ {p.preco}</Text>)
    })
  }


return (
    <>
      <Text style={estilo.FontGrande}>Lista de produtos</Text>
      <Text style={estilo.FontGrande}>Material Escolar DSM</Text>
      {obterlista()}

    </>
  )
}