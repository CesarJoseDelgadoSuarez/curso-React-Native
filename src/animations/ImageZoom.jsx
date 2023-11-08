import React from "react";
import { Button, View, StyleSheet, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";

export default function App() {
  const scale = useSharedValue(1);
  const [finished, setFinished] = React.useState(false);

  const handlePress = () => {
    scale.value = withSpring(2, {}, () => {
      // highlight-next-line
      runOnJS(() => {
        console.log("Termine");
      })(true);
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Animated.Image
          style={[styles.box, animatedStyle]}
          source={require("../../assets/images/imageNotFound.jpg")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 175,
    width: 150,
  },
});
