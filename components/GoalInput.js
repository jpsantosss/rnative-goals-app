import { StyleSheet, View, TextInput, Button , Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState(''); //Creating a const variable(string) for the entered text.
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function goalInputHandler(enteredText){ //Creating 'GoalInputHandler' function that catches the enteredText as parameter.
        setEnteredGoalText(enteredText) //'setEnteredGoalText' is a function that update the 'enteredGoalText' state with the 'enteredText' value.
    };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');//Reset our input to an empty string
    }
    function cancelAddGoalHandler(){
        setModalIsVisible(false)
    }
    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    placeholder='Your Course goal!' 
                    style={styles.textInput}
                    onChangeText={goalInputHandler} //Event on change text entered
                    value={enteredGoalText} //Reset our input to an empty string visually
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal' 
                            onPress={addGoalHandler}
                            color='#5e0acc'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Cancel'
                            onPress={props.onCancel}
                            color='firebrick'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
        marginTop: 0,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        padding: 8,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
})