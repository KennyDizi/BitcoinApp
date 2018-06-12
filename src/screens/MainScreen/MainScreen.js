import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

export default class MainScreen extends Component{
    _onPress = () => {
        Alert.alert('Fisrt own alert')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Hit me" onPress={this._onPress()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});