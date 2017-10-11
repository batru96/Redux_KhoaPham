import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
    memorizedWord() {
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        });
    }

    toggleShow() {
        this.props.dispatch({
            type: 'TOGGLE_SHOW',
            id: this.props.myWord.id
        });
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.myWord;
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
                        onPress={this.memorizedWord.bind(this)}
                    >
                        <Text>{memorizedButtontext}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={button}
                        onPress={this.toggleShow.bind(this)}
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Word);
