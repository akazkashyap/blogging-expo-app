import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';

import IndexScreen from "./src/screens/IndexScreen";
import AddBlogPost from './src/screens/AddBlogPost';
import BlogPost from './src/screens/BlogPost';
import EditBlog from './src/screens/EditBlogScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    AddBlog: AddBlogPost,
    Blog: BlogPost,
    EditBlog: EditBlog,
  },
  {
    intialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog"
    }
  }
)

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}