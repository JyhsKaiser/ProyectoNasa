import React, { FC } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage/PostImage";

const Last5DaysImages: FC<{ postImages?: PostImageTypes[] }> = ({ postImages }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ultimos 5 días</Text>
            <ScrollView>
                {postImages?.map(postImage => (
                    <PostImage key={`post-image-${postImage.title}`} {...postImage} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 18,
    },
    content: {

    }
});

export default Last5DaysImages;