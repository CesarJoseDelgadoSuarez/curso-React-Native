import { StyleSheet, View } from "react-native";
import StyledText from "../../components/StyledText";

const Animation = () => {
    return (
        <View style={styles.container}>
            <StyledText>Hola mundo!</StyledText>
        </View>
    )
}

export default Animation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});