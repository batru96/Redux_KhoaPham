import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>{this.props.myFilter}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { myFilter: state.filterStatus };
}

export default connect(mapStateToProps)(Main);
