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
  Text
} from 'react-native';

export default function App() {

  const [allMovies, setAllMovies] = useState([]) // chamar função para mudar

  useEffect(() => {

    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => {
          console.log(movie.title);
          console.log(movie.original_title);
          console.log(movie.image);
          console.log(movie.description);
          console.log(movie.release_date);
        })
      })
      .catch(err => {
        console.log(err);
      })

  },[])

  return(
    <View> My App </View>
  )

}