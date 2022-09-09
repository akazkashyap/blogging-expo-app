import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { withNavigation } from "react-navigation";

import BlogContext from "../context/BlogContext";

const AddBlogPost = ({ navigation }) => {
    const { data, blogAction } = useContext(BlogContext)
    let title = ""
    let description = ""
    let count = data.length + 1

    return <View style={{ margin: 10 }}>
        <Text style={styles.lableText}>Title</Text>
        <TextInput
            style={styles.titleBoxStyle}
            onChangeText={(text) => { title = text }}
        />

        <Text style={styles.lableText}>Description</Text>
        <TextInput
            multiline
            onChangeText={(text) => description = text}
            style={styles.descriptionBoxStyle} />
        <Button
            title="Add"
            onPress={() => {
                blogAction("addBlog", title, description, id = count)
                navigation.navigate("Index")

            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleBoxStyle: {
        margin: 10,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 25,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    descriptionBoxStyle: {
        margin: 10,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlignVertical: "top",
        height: 400
    },
    lableText: {
        fontSize: 20
    }
})

export default withNavigation(AddBlogPost);