import { useState } from 'react'; //Importing useState component from react.
import { 
  Text,
  View, 
  Button, 
  TextInput, 
  StyleSheet, 
  ScrollView, 
  FlatList 
} from 'react-native'; //Importing useful components from react-native.

export default function App() { //The default export is the function 'App'
  const [enteredGoalText, setEnteredGoalText] = useState(''); //Creating a const variable(string) for the entered text.
  const [courseGoals, setCourseGoals] = useState ([]); //Creating a const variable(array) for the course goals.

  function goalInputHandler(enteredText){ //Creating 'GoalInputHandler' function that catches the enteredText as parameter.
    setEnteredGoalText(enteredText) //'setEnteredGoalText' is a function that update the 'enteredGoalText' state with the 'enteredText' value.
  };

  function addGoalHandler(){ //Creating 'addGoalHandler' function to add a 'goal' into our 'CourseGoals'.
    setCourseGoals(//'setCourseGoals' is a function that update the 'currentCourseGoals' state. 
      (currentCourseGoals) => [//We are using a callback function as parameter '(currentCourseGoals) => [...]', where receives the current state then return a new state.
      //The callback function receives the current state as argument 'currentCourseGoals', then return that contains all elements from array with the new goal 'enteredGoalText'.
      ...currentCourseGoals, //Spread operator before the array '...' is used to spread the elements in the new array. Creating a new array with all elements from 'currrentCourseGoals' then adding the new 'enteredGoalText' at the end.
      /* - Without Spread operator:
      (pets) => [pets, new_pet] == [[cat, cow, sheep], dog]
      - Using Spread operator:
      (pets) => [...pets, new_pet] == [cat, cow, sheep, dog] */
      {text: enteredGoalText, id: Math.random().toString()} //Is the new object that represents the new goal. 
      //'text: enteredGoalText' defines the text prop of the object with the value 'enteredGoalText'. 'id: Math.random().toString()' defines the id prop of the object with a single string value generated by 'Math.random().toString()', creating a unique id por each object.
    ]);
  }; 

  return ( //Return defines what will be rendered in the app.
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Your Course goal!' 
        style={styles.textInput}
        onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} //Required prop
        renderItem={(itemData) => { //Required prop
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => { //Required prop
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
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
