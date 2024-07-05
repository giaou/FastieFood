/* this page is used to display details of pizzas */

import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{fontSize:20}}> ProductDetailsScreen for id: {id} </Text>
    </View>
  );
};
export default ProductDetailsScreen;
