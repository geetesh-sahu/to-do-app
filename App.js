import * as React from 'react';
import {View, Text, Button} from 'react-native';

import LogoTitle from './src/componants/LogoTitle';
import HomeScreen from './src/screens/homeScreen/homeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTaskScreen from './src/screens/addTaskScreen/addTaskScreen';
import TaskScreen from './src/screens/taskScreen/taskScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddTaskScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
