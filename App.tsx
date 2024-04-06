import React from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
//import ListaProdutos from './produtos/ListaProdutos';
import ListaProdutosV2 from './produtos/ListaProdutosV2';

export default () => (
  <SafeAreaView style={style.App}>
    <ListaProdutosV2/>
  </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
    backgroundColor:'#AF1',
    flexGrow:1,
    justifyContent: 'center',
    alignItems:'center',
  }
})