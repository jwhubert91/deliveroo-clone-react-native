import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { setupURLPolyfill } from "react-native-url-polyfill"

// screens
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"

// Pick up later @ 01:09:55 exactly (styling home page) - https://www.youtube.com/watch?v=AkEnidfZnCU

// We are using Nativewind instead of tailwindcss-react-native
// Docs: https://www.nativewind.dev

const Stack = createNativeStackNavigator()
setupURLPolyfill()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screens go here... */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
