import { StyleSheet, View, TextInput, Button , Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
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
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Cancel'
                            onPress={props.onCancel}
                            color='firebrick'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal' 
                            onPress={addGoalHandler}
                            color='#5e0acc'
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
        borderColor: '#e4d0ff',
        width: '90%',
        padding: 12,
        borderRadius: 6,
        color: '#120438',
        backgroundColor: '#ffffff',
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