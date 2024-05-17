
import {StatusBar} from 'expo-status-bar'
import {Text, View } from 'react-native'
import { Link, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();
export default function App(){
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className= "text-3xl "> Welcome to Huduma! </Text>
        <StatusBar style='auto'/>
        
    
      </View>
    )
  
}



