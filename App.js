import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Linking } from 'react-native-web';

export default function App() { 
  return (
    <View style={styles.container}> {/* view = <div> */}
      <Text style={styles.text}></Text> {/* text = <p> */}
      <Button title="gitHub"
              onPress={()=>{Linking.openURL('https://github.com/leticia-f')}}/>
      <StatusBar style="auto" />
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
  }
});
