import { ScrollView } from "react-native"
import React from "react"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Card */}
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 3"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 4"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 5"
      />
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 6"
      />
    </ScrollView>
  )
}

export default Categories
