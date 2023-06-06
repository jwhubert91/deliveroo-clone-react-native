import { ScrollView } from "react-native"
import React, { useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"

// sanity
import { sanityClient, urlFor } from "../sanityClient"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => setCategories(data))
  }, [])

  console.log(categories)

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
      {categories?.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={category?.image && urlFor(category.image).width(200).url()}
            title={category.name}
          />
        )
      })}
      <CategoryCard
        imgUrl="https://i.ibb.co/jRgCvwG/sushi.jpg"
        title="Testing 1"
      />
    </ScrollView>
  )
}

export default Categories
