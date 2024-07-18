import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState(''); //Creating a const variable(string) for the entered text.
    function goalInputHandler(enteredText){ //Creating 'GoalInputHandler' function that catches the enteredText as parameter.
        setEnteredGoalText(enteredText) //'setEnteredGoalText' is a function that update the 'enteredGoalText' state with the 'enteredText' value.
    };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');//Reset our input to an empty string
    }
    return(
        <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Your Course goal!' 
            style={styles.textInput}
            onChangeText={goalInputHandler} //Event on change text entered
            value={enteredGoalText} //Reset our input to an empty string visually
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
})