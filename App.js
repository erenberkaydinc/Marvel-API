import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaView} from "react-native";
import styles from './styles/styles';
import DetailScreen from "./Screens/DetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <SafeAreaView
      style={styles.SafeAreaStyle}
      >
      <Stack.Navigator
      initialRouteName="Home"
        screenOptions={{
          
          headerStyle: {
            backgroundColor: '#F0131E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            
            color:'white'
          },
        }}
        >
        <Stack.Screen 
        options={{
          headerShown: false,
        }}
        name="Home" component={HomeScreen} />
        <Stack.Screen  name="Detail" component={DetailScreen} />
        
      </Stack.Navigator>
     
       

  </SafeAreaView>
    </NavigationContainer>
  );
}
