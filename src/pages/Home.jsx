import ImageZoom from "../animations/ImageZoom";
import ImageScaleAnimation from "../animations/ImageScaleAnimation";

const HomeScreen = () => {
  const handleFinishedAnimation = () => {};

  return <ImageZoom handleFinish={handleFinishedAnimation} />;
};

export default HomeScreen;
