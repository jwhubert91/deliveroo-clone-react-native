import { View, Text, Image, SafeAreaView } from "react-native"
import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

// assets
import FoodIcon from "../assets/burger-icon.png"
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline"

// Pick up later @ 00:30:00 exactly (styling home page) - https://www.youtube.com/watch?v=AkEnidfZnCU

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView>
      {/* homescreen */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={FoodIcon} className="h-7 w-7 p-4 rounded-full" />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
