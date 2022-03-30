import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0); {/* usestate - props (não dá para mudar) - valor do contador começa com 0 */ }

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {counter * 5} </Text> {/* text = <p> */}
      <Button style={styles.button} title="Adicionar 5" onPress={onClickHandler} />
      <Text style={styles.text}> Você clicou {counter} vezes. </Text>
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
    padding: 20px,
  },
});
