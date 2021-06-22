import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../taskScreen/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Switch} from 'react-native-elements';

const TaskScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>New Task</Text>
        <Text>1 task for today</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.formContainer}>
          <View style={styles.plusLogo}>
            <Ionicons name="add-circle-outline" size={40} color={'red'} />
          </View>
          <View style={styles.form}>
            <TextInput style={styles.input} />
            <TextInput
              style={styles.input}
              placeholder="What i have to do?*"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Where?*"
              keyboardType="numeric"
            />
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="When?*"
                keyboardType="numeric"
              />
              <Switch value={true} color="red" />
              <Text style={{margin: 23}}>All day</Text>
            </View>

            <Text>* Required fields </Text>
          </View>
          <View style={styles.btnOuter}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Task')}
              style={styles.btn}>
              <Text>ADD TASK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default TaskScreen;
