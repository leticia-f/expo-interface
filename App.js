import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

// state é mutável e o props não é

export default function App() {
  const [atualizado, setAtualizado] = useState('me atualiza')

  const onClickHandler = () => {
    setAtualizado('atualizei')
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}> 1 </Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}> 2 </Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}> 3 </Text>
      </View>
    </View>
  );
}

{/* a prioridade é mudar as direções*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6393A6',
    alignItems: 'stretch', /* stretch serve para preencher 100% */
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    color: '#233B36',
    width:200,
  },
  view1: {
    flex:1,
    backgroundColor: '#2384A1',
    alignItems:'center',
    justifyContent:'center',
  },
  view2: {
    flex:2,
    backgroundColor: '#5384A1',
    alignItems:'center',
    justifyContent:'center',
  },
  view3: {
    flex:3,
    backgroundColor: '#7384A1',
    alignItems:'center',
    justifyContent:'center',
  },
});
