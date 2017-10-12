import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleMemorized, toggleShow } from '../redux/ActionCreators';

class Word extends Component {
    render() {
        const { en, vn, memorized, isShow, id } = this.props.myWord;
        const { container, buttonContainer, button } = styles;
        const memorizedButtontext = memorized ? 'forgot' : 'memorized';
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const meaning = isShow ? vn : '++++++++++';
        return (
            <View style={container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={buttonContainer}>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.props.toggleMemorized(id)}
                    >
                        <Text>{memorizedButtontext}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={() => this.props.toggleShow(id)}
                    >
                        <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange',
        margin: 10
    }
});

export default connect(null, { toggleMemorized, toggleShow })(Word);
