import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

// state é mutável e o props não é

export default function App() {
  const [atualizado,setAtualizado] = useState('me atualiza')

  const onClickHandler = () => {
    setAtualizado('atualizei')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> tá sabendo da fofoca? </Text>
      <Text style={styles.text}> {atualizado} </Text>
      <Button style={styles.button} title="me conta" onPress={onClickHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6393A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#733B36',
  },
  button: {
    color: '#733B36',
    padding: 20,
  },
});
