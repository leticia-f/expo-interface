import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, Image, Text, StyleSheet } from 'react-native'
import { styles } from './components/meusEstilos/styleRN'
export default function App() {

  const [allMovies, setAllMovie] = useState([])

  useEffect(() => {

    // fetch busca os dados no site
    // then response vai transformar resposta em um json
    // then data vai formatar os dados listando/mapeando o array

    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => {
          // console.log(movie.title);
          // console.log(movie.original_title)
          // console.log(movie.image)
          // console.log(movie.description)
          // console.log(movie.release_date)
          // console.log(movie.director)
        })

        setAllMovie(data); // usando data em vez de movie porque o arquivo/resposta
        // do .then é uma variável chamada data, movie é no map/forEach (já foi fechado)

      }).catch(err => {
        console.log(err)
      })

  }, [])

  return (

    <View style={styles.body}>
      {/* flatlist exibe uma sequência de imagens */}

      <Text style={styles.titulo} > Studio Ghibli </Text>
      <FlatList
        data={allMovies}
        renderItem={({ item }) =>  // atributo e item nos parênteses, respectivamente
          // item (objeto) representa movie
          // chave dentro de parênteses - desestruturação
          <View>
            <Text style={styles.textos}> {item.title} </Text> {/* puxar atributo, obj chamado item */}
            <Text style={styles.textos}> {item.original_title} </Text>
            <Image
              style={{ width: 196, height: 294 }}
              source={{ uri: item.image }} 
              /> {/* uri é local */}
            <Text style={styles.textos}> {item.description} </Text>
            <Text style={styles.textos}> Ano de lançamento: {item.release_date} </Text>
            <Text style={styles.end} > Direção: {item.director} </Text>
          </View>
        }
      />

    </View>

  )
}

function MovieShow(item) {
  const { title, description, image } = item.item
}
