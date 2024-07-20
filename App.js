import { useState } from 'react'; //Importing useState component from react.
import { 
  View, 
  StyleSheet, 
  FlatList,
  Button,
} from 'react-native'; //Importing useful components from react-native.
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() { //The default export is the function 'App'
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState ([]); //Creating a const variable(array) for the course goals.

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){ //Creating 'addGoalHandler' function to add a 'goal' into our 'CourseGoals'.
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
    endAddGoalHandler(); //This calls the function 'endAddGoalHandler' in order to close the modal whenever you click to add a goal.
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return ( //Return defines what will be rendered in the app.
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add new Goal' 
          color="#8A18F0"
          onPress={startAddGoalHandler}  
        />
        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
          data={courseGoals} //Required prop, data receive the array of items you want to pass into the FlatList.
          renderItem={(itemData) => { //Required prop, this told the FlatList how to render each item in the list, for exemple, this code using components.
            return (
            <GoalItem 
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => { //Required prop, function that returns a unique key for each item in list. The 'item' means the current item in list being processed. 'index' not used in this exemple.
            return item.id; //returns the propertie`s value of the current item.
          }}
          alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: '#AFA7FF',
  },
  goalsContainer:{
    flex: 4,
  },
});
