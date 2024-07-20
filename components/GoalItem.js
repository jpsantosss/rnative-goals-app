import { StyleSheet, View, Text, Pressable, Image } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            onPress={props.onDeleteItem.bind(this, props.id)}
            android_ripple={{color: '#210644'}}
            style={({pressed}) => pressed && styles.pressedItem}
        >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
} 

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 12,
        backgroundColor: '#311b6b',
    },
    pressedItem:{
        opacity: 0.5,
    },
    goalText:{
        padding: 8,
        color: '#fff',
    },
})