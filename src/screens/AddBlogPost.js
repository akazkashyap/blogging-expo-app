import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { withNavigation } from "react-navigation";

import BlogContext from "../context/BlogContext";

const AddBlogPost = ({ navigation }) => {
    const { data, blogAction } = useContext(BlogContext)

    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [count, setCount] = useState(data.length + 1)
    let actionTitle = "Save"

    //For edit purpose
    //These values will replace the previous values but the id will be same as before.
    useEffect(() => {
        if (navigation.getParam("title")) {
            setTitle(navigation.getParam("title"))
            setDescription(navigation.getParam("description"))
            setCount(navigation.getParam("id"))

            //to delete existing blog
            blogAction("deleteBlog", "", "", navigation.getParam("id"))
        }
    }, [])

    //For new Adding if not directed from exit button

    return <View style={{ margin: 10 }}>
        <Text style={styles.lableText}>Title</Text>
        <TextInput
            style={styles.titleBoxStyle}
            onChangeText={(text) => { setTitle(text) }}
            value={title}
        />

        <Text style={styles.lableText}>Description</Text>
        <TextInput
            multiline
            onChangeText={(text) => setDescription(text)}
            style={styles.descriptionBoxStyle}
            value={description} />
        <Button
            title={actionTitle}
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