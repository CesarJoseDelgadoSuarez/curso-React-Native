// MovieInfo.jsx

import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../../components/StyledText";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const MovieInfo = ({ route }) => {
    // Accede al ID de la película desde las props
    const { movieId } = route.params;

    return (
        <View style={styles.container}>
            <StyledText>
                Movie Info for Movie ID: {movieId}
            </StyledText>
        </View>
    );
}

export default MovieInfo;
