import React, { useContext } from "react";
import { withNavigation } from "react-navigation";

import BlogInputs from "./Components/BlogInputs";
import { Context } from "../context/BlogContext";


const EditBlog = ({ navigation }) => {
    const { state, editBlog } = useContext(Context)

    const id = navigation.getParam("id")
    const blogPost = state.find(element => element.id == id)

    return <BlogInputs
        initialValues={
            {
                title: blogPost.title,
                description: blogPost.description,
                id: id
            }
        }
        onSubmit={(title, description, id) => {
            editBlog(title, description, id, () => navigation.pop())
        }}
    />
}

export default EditBlog;