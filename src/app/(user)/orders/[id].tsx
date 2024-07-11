import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import OrderListItem from "@/src/components/OrderListItem";

import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();

  //find the order

  const order = orders.find((p) => p.id.toString() === id);

  if (!order) return <Text>Order not found!</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order#${id}` }} />
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    // padding:10,
    // flex:1,
    // gap:10
  },
});
