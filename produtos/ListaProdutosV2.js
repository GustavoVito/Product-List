import React from 'react'
import {FlatList, Text} from 'react-native'
import estilo from '../src/estilo'
import Produtos from './Produtos'

export default comp => {
return (
    <>
      <Text style={estilo.FontGrande}>Lista de produtos</Text>
      <Text style={estilo.FontGrande}>Material Escolar DSM</Text>
      <FlatList
        data={Produtos}
        renderItem={({ item: p}) => {
          return (
              <Text key={p.id}>
                {p.id} {p.nome}
                Valor do produto R$ {p.preco}
              </Text>
          )}}>
      </FlatList>

    </>
  )
}