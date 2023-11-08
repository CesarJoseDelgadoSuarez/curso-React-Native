import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  Pressable,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { useAnimatedStyle } from "react-native-reanimated";

const ImageZoom = ({ handleFinish, ...props }) => {
  const scale = useSharedValue(1);

  const [finished, setFinished] = React.useState(false);

  const scaleFactor = Dimensions.get("window").width / 150;

  console.log(scaleFactor);

  const handlePress = () => {
    scale.value = withTiming(scaleFactor, {}, () => {
      // highlight-next-line
      runOnJS(() => {
        console.log("Termine");
        handleFinish();
      })();
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value, translateX: 100, translateY: 100 }],
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
};

export default ImageZoom;

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
