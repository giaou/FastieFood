import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

//set type for the product attribute
type ProductListItemProps = {
  product: Product;
};

//{product}:ProductListItemProps:  specify the type, the declared Product type will now complain if there are any invalid types {product}:ProductListItemProps
const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product);
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain" //to adjust image to fully show picture in the container
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1, //it will split equally the space among siblings (50-50 with 2 columns)
    maxWidth: "50%", //in case we have odd number of product, the one leftover product will occupy 50% of the space only.
  },
  image: {
    width: "100%",
    aspectRatio: 1, //height will be dependent on width or vice versa
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
