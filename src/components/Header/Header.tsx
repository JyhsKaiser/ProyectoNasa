import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* <Text style={styles.title}>Explorar</Text> */}
            </View>
            <View style={styles.rightContainer}>
                <Image source={require("../../assets/logoNasa.png")} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",

    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        color: "white",
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    image: {
        // marginTop: 130,
        width: 60,
        height: 60,
    }
})

export default Header;
