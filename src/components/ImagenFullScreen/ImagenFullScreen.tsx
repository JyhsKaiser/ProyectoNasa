// views/FullScreenImageScreen.tsx
import React from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParamList } from "../../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";


const { width, height } = Dimensions.get('window');

const ImagenFullScreen = () => {

    const { params: { url }
    } = useRoute<NativeStackScreenProps<RootStackParamList, 'Detalles'>['route']>();
    // const { imageUrl } = route.params;
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: url }}
                style={styles.image}
                resizeMode="contain" // Ajusta la imagen al centro
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    image: {
        width: height, // usamos height como width porque rotamos
        height: width,
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        top: (height - width) / 2,
        left: (width - height) / 2,
    },

});

export default ImagenFullScreen;
