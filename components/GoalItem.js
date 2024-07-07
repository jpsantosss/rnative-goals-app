import { StyleSheet, View, Text } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
} 

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#5e0acc',
      },
    goalText:{
        color: '#fff',
    },
})