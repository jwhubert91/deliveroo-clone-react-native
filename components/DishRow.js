import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import { urlFor } from "../sanityClient"
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid"
import { useDispatch, useSelector } from "react-redux"
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../slices/baseketSlice"

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false)
  const itemsInBasket = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  )
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (itemsInBasket.length == 0) return
    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400 mb-2">{description}</Text>
            <Text className="text-gray-400">${price} USD</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-2">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                size={40}
                color={itemsInBasket.length > 0 ? "#00CCBB" : "gray"}
                disabled={!itemsInBasket.length}
              />
            </TouchableOpacity>
            <Text>{itemsInBasket.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
