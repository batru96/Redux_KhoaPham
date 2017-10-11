import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) {
            return { backgroundColor: 'blue', padding: 10 };
        }
        return styles.button;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({
            type: actionType
        });
    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <TouchableOpacity
                    onPress={() => this.setFilterStatus('FILTER_SHOW_ALL')}
                    style={this.getTextStyle('SHOW_ALL')}
                >
                    <Text>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setFilterStatus('FILTER_MEMORIZED')}
                    style={this.getTextStyle('MEMORIZED')}
                >
                    <Text>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setFilterStatus('FILTER_NEED_PRACTICE')}
                    style={this.getTextStyle('NEED_PRACTICE')}
                >
                    <Text>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'yellow',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'green',
        padding: 10
    }
});

function mapStateToProps(state) {
    return { myFilterStatus: state.filterStatus };
}

export default connect(mapStateToProps)(Filter);
