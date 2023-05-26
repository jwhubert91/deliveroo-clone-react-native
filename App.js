import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// screens
import HomeScreen from "./screens/HomeScreen"

// Pick up later @ 01:09:55 exactly (styling home page) - https://www.youtube.com/watch?v=AkEnidfZnCU

// We are using Nativewind instead of tailwindcss-react-native
// Docs: https://www.nativewind.dev

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens go here... */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
