import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course goal!' style={styles.textInput}/>
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 8,
    marginRight: 8,
  },
});
