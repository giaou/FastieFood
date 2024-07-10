import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInput = () => {
    setEmail(email);
    setPassword(password);
    console.log(email + " " + password);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        placeholder="jon@gmail.com"
      ></TextInput>

      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      ></TextInput>
      <Button text="Create account"></Button>
      <Link href="/sign-in" asChild>
        <Text style={styles.signup}>Sign in</Text>
      </Link>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    color: "grey",
    fontWeight: "400",
    fontSize: 15,
  },
  input: {
    backgroundColor: "white",
    marginTop: 5,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
  },
  signup: {
    textAlign: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
});
