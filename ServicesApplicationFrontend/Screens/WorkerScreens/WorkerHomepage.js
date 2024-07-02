import React, { useState, useEffect } from 'react';
import { Appbar } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import JobRequestsScreen from './JobRequests';
import ActivityScreen from './Activity';
import ProfileScreen from './Profile';
import CustomHeader from '../../components/CustomHeader'; 
import { AUTH, FIRESTORE_DB } from '../../firebaseConfig';
import { onSnapshot,doc, getDoc } from 'firebase/firestore';

const Tab = createMaterialBottomTabNavigator();

const WorkerHomepage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    checkBan();
  }, []);
  const checkBan = async () => {
    let userRef = doc(FIRESTORE_DB,'Users',AUTH.currentUser.uid)
    getDoc(userRef)
      .then(doc=>{
        if(doc.data().ban){
          navigation.replace("BanScreen");
        }
      })
  }
  return (
    <>
      <Appbar.Header mode='small' collapsable={true} style={{backgroundColor:'white'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Get Work" />
        <Appbar.Action icon="cog" onPress={() => {navigation.push("Settings")}} />
      </Appbar.Header>
      <Tab.Navigator
        initialRouteName="Requests"
        activeColor="#6200ee" 
        inactiveColor="#888888"
        barStyle={{ backgroundColor: '#ffffff' }}
      >
        <Tab.Screen
          name="Requests"
          component={JobRequestsScreen}
          options={{
            tabBarLabel: 'Requests',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="file-document-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarLabel: 'Activity',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="clock"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default WorkerHomepage;
