import Blog from './Blog';
import Edit from './Edit';
import Post from './Post';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const NavStack = createStackNavigator({

    Blog: {
        screen:Blog
    },
    Edit: {
        screen:Edit
    },

})
const BottomTab = createBottomTabNavigator({
    NavStack: {
        screen:NavStack
    },
    Post: {
        screen:Post
    }
})

export default Routes = createAppContainer(BottomTab)
