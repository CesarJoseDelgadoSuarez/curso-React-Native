import React, { useState, useEffect } from "react";
import { View, Image, Pressable, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
  withDelay,
} from "react-native-reanimated";

const ImageScaleAnimation = (props) => {
  const [scaleAnimationH] = useState(() => useSharedValue(80));
  const [scaleAnimationW] = useState(() => useSharedValue(50));

  const imgSrc =
    props.source || require("../../assets/images/imageNotFound.jpg");

  useEffect(() => {
    // Ensure that the Shared Values are initialized only once
    scaleAnimationH.value = 80;
    scaleAnimationW.value = 50;
  }, []);

  const startAnimation = () => {
    const { height, width } = Dimensions.get("window");
    const duration = 1000;

    scaleAnimationH.value = withSequence(
      withTiming(height, { duration, easing: Easing.inOut(Easing.ease) }),
      withDelay(200), // Optional delay between height and width animations
      withTiming(width, { duration, easing: Easing.inOut(Easing.ease) })
    );

    scaleAnimationW.value = withSequence(
      withTiming(width, { duration, easing: Easing.inOut(Easing.ease) }),
      withDelay(200), // Optional delay between height and width animations
      withTiming(height, { duration, easing: Easing.inOut(Easing.ease) })
    );

    // Callback when animation finishes
    setTimeout(() => {
      props.handleFinish();
    }, duration * 2 + 200); // Adjust timeout to match the total animation duration
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: scaleAnimationW.value,
      height: scaleAnimationH.value,
    };
  });

  return (
    <Pressable onPress={startAnimation}>
      <Animated.Image
        source={imgSrc}
        style={[{ resizeMode: "cover" }, animatedStyle]}
      />
    </Pressable>
  );
};

export default ImageScaleAnimation;
