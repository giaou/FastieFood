import CartListItem from "@components/CartListItem";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, View } from "react-native";
import { useCart } from "../providers/CartProvider";

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
