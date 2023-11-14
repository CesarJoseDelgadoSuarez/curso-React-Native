import React, { Component } from "react";
import { Animated, Pressable, Dimensions } from "react-native";

class ImageScaleAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleAnimationH: new Animated.Value(80),
      scaleAnimationW: new Animated.Value(50),
    };
    this.imgSrc =
      props.source || require("../../assets/images/imageNotFound.jpg");
    this.handleFinish = props.handleFinish;
    this.isAnimating = false;
  }

  startAnimation = () => {
    if (this.isAnimating) {
      return;
    }

    const { scaleAnimationH, scaleAnimationW } = this.state;
    const { height, width } = Dimensions.get("window");
    const duration = 1000;

    const animationConfigH = {
      toValue: height,
      duration,
      useNativeDriver: false,
    };
    const animationConfigW = {
      toValue: width,
      duration,
      useNativeDriver: false,
    };

    this.isAnimating = true;

    Animated.parallel([
      Animated.timing(scaleAnimationH, animationConfigH),
      Animated.timing(scaleAnimationW, animationConfigW),
    ]).start(({ finished }) => {
      this.isAnimating = false;
      this.handleFinish();

      this.resetAnimation();
    });
  };

  resetAnimation = () => {
    const { scaleAnimationH, scaleAnimationW } = this.state;

    Animated.parallel([
      Animated.timing(scaleAnimationH, {
        toValue: 80,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnimationW, {
        toValue: 50,
        duration: 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    const { scaleAnimationH, scaleAnimationW } = this.state;

    return (
      <Pressable onPress={this.startAnimation}>
        <Animated.Image
          source={this.imgSrc}
          style={{
            width: scaleAnimationW,
            height: scaleAnimationH,
          }}
        />
      </Pressable>
    );
  }
}

export default ImageScaleAnimation;
