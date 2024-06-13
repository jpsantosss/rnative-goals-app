import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {styles} from './style'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textParagraph}>Hello world! My name is</Text>
      </View>
      <Text style={styles.text}>João Pedro!</Text>
      <Button title='Tap me!'
      color='blue'
      />
      <StatusBar style="light" />
    </View>
  );
}

