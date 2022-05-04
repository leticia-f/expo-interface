import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

export default function App() {

  const [allMovies, setAllMovies] = useState([]) // chamar função para mudar

  useEffect(() => {

    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => {
          console.log(movie);
          setAllMovies(movie)
        })
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (
    <View>
      <Flatlist
        data={allMovies}
        keyExtractor={(movie) => movie.title}
        renderItem={MovieShow}
      />
    </View>
  )

}

function MovieShow(item){
  const{title,original_title,banner,description,director,release_date} = item.item
}

