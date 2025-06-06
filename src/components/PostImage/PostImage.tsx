import React, { FC } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { PostImage as PostImageType } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'Detalles'
>;

const PostImage: FC<PostImageType> = ({ title, date, url, explanation }) => {

    const { navigate } = useNavigation<PostImageNavigationProps>();

    const handleVerMasPress = () => {
        navigate('Detalles', { title, date, url, explanation });
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Ver mas'
                    onPress={handleVerMasPress}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(18, 39, 113, 255)",
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 12,
        fontWeight: "bold",
    },
    date: {
        color: "#fff",
    },
    buttonContainer: {
        marginTop: 12,
        alignItems: "flex-end",
    },
});

export default PostImage;