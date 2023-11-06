import { Pressable, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});

const MiBoton = ({ onPress, children, ...props }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
);

export default MiBoton;
