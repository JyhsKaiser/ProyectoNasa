import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { PostImage, RootStackParamList } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type PostImageNavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'Detalles'
>;

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();

    const handleVerMasPress = () => {
        navigate('Detalles', { title, date, url, explanation });
    }

    const handleVerImagenPress = () => {
        navigate('ImagenFullScreen', { url });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleVerImagenPress}>
                <Image
                    source={{ uri: url }}
                    style={styles.image}
                />
            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.date}>
                {date}
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ver más"
                    onPress={handleVerMasPress}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449d",
        marginBottom: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    imageContainer: {
        // borderWidth: 2,
        borderRadius: 32,
    },
    image: {
        width: "100%",
        height: 190,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: "bold",
    },
    date: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 12,
    },
    buttonContainer: {
        alignItems: "flex-end",
    }

})
export default TodaysImage;