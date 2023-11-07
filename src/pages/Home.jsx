import { StyleSheet, View } from "react-native";
import StyledText from "../components/StyledText.jsx";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = () => {

  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <StyledText>{t('welcome')}</StyledText>
    </View>
  );
};

export default HomeScreen;
