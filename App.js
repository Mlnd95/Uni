import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    setCourseGoals(currentGoals => [
      ... currentGoals,
      { key: Math.random().toString(), value: enteredGoal}
    ]);
  };

  return (
    <View >
      <View style = {styles.container}>
      <TextInput
       placeholder = " Course Goal"
       style = {styles.textInput}
       onChangeText = {goalInputHandler}
       value={enteredGoal}
        />
        <Button title ="Add" onPress={addGoal} />
      </View>
     <FlatList
          keyExtractor={(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <View style={styles.listItem} >
              <Text>{itemData.item.value}</Text>
            </View>
          )}
      />
  );
}


const styles = StyleSheet.create({
container: {

flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
textAlign: 'center',
padding: 50,

},
textInput: {

  backgroundColor: '#fff',
  borderColor: "black",
  borderWidth: 1,
  textAlign: 'left',
  width: "80%",

},
listItem: {

  alignItems: 'center',
  padding: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1,
  marginVertical: 5,
  width: '80%',
  //justifyContent:'center',
},

})
