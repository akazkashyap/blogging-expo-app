import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';

import IndexScreen from "./src/screens/IndexScreen";
import AddBlogPost from './src/screens/AddBlogPost';
import BlogPost from './src/screens/BlogPost';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    AddBlog: AddBlogPost,
    Blog: BlogPost,
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
  return <BlogProvider>
    <App />
  </BlogProvider>
}