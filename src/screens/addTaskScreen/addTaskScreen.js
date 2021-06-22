import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../addTaskScreen/styles';

const AddTaskScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hi!</Text>
      </View>
      <Text>Nothing to do yet? Think about it</Text>
      <Text>and let's start!</Text>
      <View style={styles.btn}>
        {/* <Button title="ADD TASK" onPress={() => navigation.navigate('Task')} /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Task')}
          style={styles.btn}>
          <Text>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
