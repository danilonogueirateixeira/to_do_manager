import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { readTaskFromFirebaseAsync } from '../services/FirebaseApi';
import { TaskListView } from '../components/Components';

const imgCheckList = require('../assets/checklist.png');
const imgPlus = require('../assets/plus_64.png')

export default class ToDoTasks extends Component {


    state = {
        tasks: []
    }


    static navigationOptions = {
        tabBarLabel: 'To Do',
        tabBarIcon: ({ tintColor }) => (
            <Image source={imgCheckList} style={[styles.icon, { tintColor }]} />
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <TaskListView tasks={this.state.tasks} />
                <TouchableOpacity style={styles.floatButton}
                    onPress={() => this._goToTask()}>
                    <Image source={imgPlus} style={styles.img} />
                </TouchableOpacity>
            </View>
        );
    }

    _goToTask() {
        this.props.navigation.navigate('pageTask');
    }

    componentDidMount() {
        readTaskFromFirebaseAsync(this._fetchTasks.bind(this));
    }

    _fetchTasks(tasks) {
        const tasksToDo = tasks.filter(t => !t.isDone);
        this.setState({ tasks: tasksToDo});
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    }
});