import React, { Component } from 'react';
import {
    View, StyleSheet, TextInput, Text, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {toggleIsAdding, addWord} from '../redux/ActionCreators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
    }
    onAdd() {
        const { en, vn } = this.state;
        this.props.toggleIsAdding(en, vn);
        this.props.addWord(en, vn);
    }
    render() {
        const { container, input, button } = styles;
        const { en, vn } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    value={en}
                    placeholder='English word'
                    onChangeText={text => this.setState({ en: text })}
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={input}
                    value={vn}
                    placeholder='Meanning'
                    onChangeText={text => this.setState({ vn: text })}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={button} onPress={this.onAdd.bind(this)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        margin: 10,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'blue',
        margin: 10
    }
});

export default connect(null, {toggleIsAdding, addWord})(Form);
