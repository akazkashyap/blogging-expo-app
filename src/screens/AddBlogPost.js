import React, { useContext } from "react";

import { Context } from "../context/BlogContext";
import BlogInputs from "./Components/BlogInputs";

const AddBlogPost = ({ navigation }) => {
    const { state, addBlog } = useContext(Context)

    return <BlogInputs
        initialValues={
            {
                title: "",
                description: "",
                id: state.length + "" + Math.floor(Math.random() * 999)
            }
        }
        onSubmit={(title, description, id) => {
            addBlog(title, description, id, () => {
                navigation.navigate("Index")
            })
        }}
    />
}

export default AddBlogPost;