import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/ActionCreators';

class Header extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <View />
                <Text>MY WORDS</Text>
                <TouchableOpacity onPress={() => this.props.toggleIsAdding()} >
                    <Text>+</Text>
                </TouchableOpacity>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'gray',
        flexDirection: 'row',
    }
});

export default connect(null, { toggleIsAdding })(Header);
