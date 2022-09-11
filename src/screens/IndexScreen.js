import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import BlogContext from "../context/BlogContext"

const IndexScreen = ({ navigation }) => {
    const { data } = useContext(BlogContext)

    return <>
        {!data.length ? <Text style={styles.noBlogText}>Nothing to show</Text> : null}
        <FlatList
            data={data}
            keyExtractor={post => post.id}
            renderItem={({ item }) => {

                return (

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Blog", {
                                title: item.title,
                                description: item.description,
                                id: item.id
                            })
                        }}>
                        <View style={styles.postBoxStyle}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <Text style={styles.descriptionStyle}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>)
            }} />

        <TouchableOpacity
            onPress={() => navigation.navigate("AddBlog")}
        >
            <Text style={styles.addBtn}>+</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    postBoxStyle: {
        backgroundColor: "#BFBEBE49",
        borderRadius: 20,
        padding: 20,
        margin: 10
    },
    addBtn: {
        backgroundColor: "#7E7E7Ead",
        width: 70,
        height: 70,
        fontSize: 51,
        borderRadius: 50,
        position: "absolute",
        bottom: 100,
        left: "80%",
        textAlign: "center",
        color: "#ffffff",
    },
    titleStyle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    descriptionStyle: {
        fontSize: 15
    },
    noBlogText: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20
    }
})

export default IndexScreen;