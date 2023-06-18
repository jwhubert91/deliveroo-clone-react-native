import { View, Text } from "react-native"
import React, { useState, useMemo } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { selectRestaurant } from "../slices/restaurantSlice"
import { selectBasketItems } from "../slices/baseketSlice"

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()

  useMemo(() => {
    const groupedItems = items.reduce(
      (results, item) => {
        ;(results[item.id] = results[item.id] || []).push(item)
        return results
      },
      [items]
    )

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  console.log(groupedItemsInBasket)

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen
