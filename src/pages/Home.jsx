import { StyleSheet, View } from "react-native";
import StyledText from "../components/StyledText.jsx";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StyledText> Hola mundo! </StyledText>
    </View>
  );
};

export default HomeScreen;
