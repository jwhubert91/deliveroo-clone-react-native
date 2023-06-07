import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native"
import React, { useLayoutEffect, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

// components
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"

// assets
import FoodIcon from "../assets/burger-icon.png"
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline"

// sanity
import { sanityClient } from "../sanityClient"

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]-> {
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data)
      })
  }, [])

  return (
    <SafeAreaView className="bg-white">
      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={FoodIcon} className="h-7 w-7 p-4 rounded-full" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>
      {/* BODY */}
      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories />
        {featuredCategories?.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              description={category.short_description}
              title={category.name}
            />
          )
        })}
        {/* featured rows */}
        {/* <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juice discounts!"
          id="456"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight?"
          id="789"
        /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
