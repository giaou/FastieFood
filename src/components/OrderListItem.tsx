import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Order } from "../types";
import { Link,useSegments } from "expo-router";

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};



const OrderListItem = ({ order }: OrderListItemProps) => {

  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order#{order.id}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>

        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    marginVertical: 5,
  },
  time: {
    color: "grey",
  },
  status: {
    fontWeight: "500",
  },
});
