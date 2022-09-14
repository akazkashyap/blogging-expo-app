import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "addBlog":
            return [...state, { title: action.title, description: action.description, id: action.id }]

        case "editBlog":
            const updatedItem = {
                title: action.title,
                description: action.description,
                id: action.id
            }
            return state.map((element) => element.id === action.id ? updatedItem : element)

        case "deleteBlog":
            return state.filter((item) => item.id !== action.id)

        default:
            return state
    }
}

const addBlog = (dispatch) => {
    return (title, description, id, callback) => {
        dispatch({ type: "addBlog", title, description, id })
        callback()
    }
}

const deleteBlog = (dispatch) => {
    return (id, callback) => {
        dispatch({ type: "deleteBlog", id })
        callback()
    }
}

const editBlog = (dispatch) => {
    return (title, description, id, callback) => {
        dispatch({ type: "editBlog", title, description, id })
        callback()
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlog, editBlog, deleteBlog },
    []
)