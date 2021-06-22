import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropdownMenu from 'react-native-dropdown-menu';

const data = [['today', 'Java', 'JavaScript', 'PHP']];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeScreen}>
      <Text>My Tasks</Text>
      <View>
        <Ionicons name="time-outline" size={30} color="white" />
        {/* <View style={{flex: 1}}>
          <View style={{height: 64}}>
            <DropdownMenu
              data={data}
              handler={(selection, row) => data[selection][row]}></DropdownMenu>
          </View>
        </View> */}
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons name="calendar-outline" size={40} color="grey" />
        <Text> No Tasks for Today</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
