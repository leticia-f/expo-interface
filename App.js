import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState([
    {key: 1, personagem: 'Ai Ohto',         midia: 'Wonder Egg Priority'},
    {key: 2, personagem: 'Kyoka Jiro',      midia: 'Boku no Hero'},
    {key: 3, personagem: 'Gin Akutagawa',   midia: 'Bungo Stray Dogs'},
    {key: 4, personagem: 'Chuuya Nakahara', midia: 'Bungo Stray Dogs'},
    {key: 5, personagem: 'Sakura Ogami',    midia: 'Trigger Happy Havoc'},
    {key: 6, personagem: 'Mahiru Koizumi',  midia: 'Goodbye Despair'},
    {key: 7, personagem: 'Yanfei',          midia: 'Genshin Impact'},
    {key: 8, personagem: 'Albedo',         midia: 'Genshin Impact'},
    {key: 9, personagem: 'Seele Vollerei',  midia: 'Honkai Impact'},
    {key: 10, personagem: 'Shinobu Kocho',   midia: 'Demon Slayer'},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: 'Item 69' }]);
    setRefreshing(false);
  }
  {/*ESTE CÓDIGO SÓ ATUALIZA PELO CELULAR, ELE ADICIONA O ITEM 69 QUANDO FOR RECOMPILADO*/}
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#449f']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>
                personagem fav: {object.personagem} <br/>
                anime/jogo: {object.midia}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#449f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;