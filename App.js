import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState ([]);

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText,]);
  }; 

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput 
        placeholder='Your Course goal!' 
        style={styles.textInput}
        onChangeText={goalInputHandler}/>

        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>

        {courseGoals.map ((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}

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
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color: '#fff',
  },
});
