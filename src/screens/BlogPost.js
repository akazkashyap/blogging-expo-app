import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native"

import { Context } from "../context/BlogContext";

const BlogPost = ({ navigation }) => {
    const { state, deleteBlog } = useContext(Context)

    const id = navigation.getParam("id")
    const blog = state.find(element => element.id == id) || {}

    const title = blog.title
    const description = blog.description

    return <>
        <View
            style={styles.viewStyle}
        >
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>

        </View>
        <View style={styles.btns}>
            <View style={styles.btn1}>
                <Button
                    title="Delete"
                    onPress={() =>
                        deleteBlog(id, () => navigation.navigate("Index"))
                    }
                    color={"#A60963"}
                />
            </View>
            <View style={styles.btn2}>
                <Button
                    title="Edit"
                    onPress={() => navigation.navigate("EditBlog", { id })}
                />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#BFBEBE49",
        margin: 20,
        padding: 20,
        borderRadius: 15,
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    },
    descriptionStyle: {
        fontSize: 20
    },
    btns: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn1: {
        width: "50%",
        height: "100%"
    },
    btn2: {
        width: "50%",
        height: "100%"
    }
})

export default BlogPost;