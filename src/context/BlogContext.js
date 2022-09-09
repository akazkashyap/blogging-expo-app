import React, { useReducer } from "react";


const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch (action.type) {
        case "addBlog":
            return [...state, { title: action.title, description: action.description, id: action.id }]
        case "editBlog":
            return [state.filter((blog) => { blog.id != action.id })]
        case "deleteBlog":
            return state.filter((blog) => blog.id != action.id)
        default:
            return "Something went wrong!"
    }
}

export const BlogProvider = ({ children }) => {

    const [blogPost, dispatch] = useReducer(blogReducer, [])

    const blogAction = (type, title, description, id) => {

        dispatch({ type, title, description, id })
    }

    return <BlogContext.Provider
        //These values can be used in any child component but using useContext
        value={{ data: blogPost, blogAction }}
    >
        {children}
    </BlogContext.Provider>
}

export default BlogContext;