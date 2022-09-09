import React, { useContext } from "react";
import { View, Text, Button } from "react-native"
import { withNavigation } from "react-navigation";

import BlogContext from "../context/BlogContext";

const BlogPost = ({ navigation }) => {
    const { data, blogAction } = useContext(BlogContext)

    const title = navigation.getParam("title")
    const description = navigation.getParam("description")
    const id = navigation.getParam("id")
    return <>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Button
            title="Delete"
            onPress={() => {
                blogAction("deleteBlog", title, description, id)
                navigation.navigate("Index")
            }} />
    </>
}

export default withNavigation(BlogPost);