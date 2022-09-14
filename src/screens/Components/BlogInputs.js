import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { withNavigation } from "react-navigation";

const BlogInputs = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title)
    const [description, setDescription] = useState(initialValues.description)
    const id = initialValues.id

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
            style={styles.descriptionBoxStyle}
            onChangeText={(text) => setDescription(text)}
            value={description}
        />

        <Button
            title={"Save"}
            onPress={() => {
                onSubmit(title, description, id)
            }}
        />

    </View>
}

// BlogInputs.defaultProps = {
//     initialValues: {
//         title: "",
//         description: ""
//     }
// }

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

export default withNavigation(BlogInputs);