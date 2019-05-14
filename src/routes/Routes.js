import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { App, Login, Register, ToDoTasks, DoneTasks } from '../screens/Screens';
import { Platform } from 'react-native';

const taskListTabNavigator = createBottomTabNavigator({
    pageToDoTasks: { screen: ToDoTasks, title: 'To Do'},
    pageDoneTasks: { screen: DoneTasks, title: 'Done'}
});

export default Routes = createAppContainer(createStackNavigator(
    {
        pageApp: { screen: App},
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        pageTasksList: {
            screen: taskListTabNavigator,
            navigatoionOptions: {
                ...Platform.select({
                    ios: {
                        title: 'Task List'
                    },
                    android: {
                        header: null
                    }
                })
            }
        }
    }, {
        headerMode: 'screen'
    }
));