import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

//* state é mutável e o props não é */}

export default function App() {
  const [name,setName] = useState('Avatar 1')
  const [session,setSession] = useState({number: 6, title: "The Batman"}) //{/* troca todos os valores */}
  const [current,setCurrent] = useState(true)

  const onClickHandler = () => { //* troca todos os valores */}
    setName('Avatar 2')
    setSession({number: 7, title: 'Jujutsu Kaisen 0'})
    setCurrent(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Bem vindo(a), {name}! </Text>
      <Text style={styles.text}> Seu filme, {session.title},  está na sessão {session.number}. </Text>
      <Text style={styles.text}> {current ? 'Ele está sendo exibido agora.' : 'empresa te enganoukkjkk'} </Text> {/* ? = if / : = else*/}

      <Button style={styles.button} title="não sou eu" onPress={onClickHandler} />
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
