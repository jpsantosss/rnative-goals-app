import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course goal!' style={styles.textInput}/>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: 8,
  },
  goalsContainer:{
    flex: 4,
  }
});
