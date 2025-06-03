import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'Detalles'
>;

const Detail = () => {
    const { navigate } = useNavigation<PostImageNavigationProps>();

    const { params: { title, url, explanation, date }
    } = useRoute<NativeStackScreenProps<RootStackParamList, 'Detalles'>['route']>();

    const handleVerImagenPress = () => {
        navigate('ImagenFullScreen', { url });
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <TouchableOpacity onPress={handleVerImagenPress} style={styles.imageButtom}>
                    <Image
                        source={{ uri: url }}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.explanationContainer}>
                        {explanation}
                    </Text>
                </ScrollView>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(7, 26, 93, 255)',
        paddingHorizontal: 16,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    date: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 12,
    },
    content: {
        flex: 1,
        backgroundColor: "#2c449d",
        borderRadius: 32,
        marginBottom: 24,
        padding: 16,
    },
    image: {
        width: '100%',
        height: "100%",
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 16,
    },
    imageButtom: {
        borderRadius: 32,
        // overflow: 'hidden',
        marginBottom: 16,
        // borderWidth: 2,
        height: 200,
    },
    explanationContainer: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        // marginVertical: 16,
    },

});

export default Detail;