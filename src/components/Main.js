import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import Header from './Header';
import Form from './Form';
import Word from './Word';
import Filter from './Filter';

class Main extends Component {
    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORIZED') {
            return myWords.filter(e => e.memorized);
        } else if (myFilter === 'NEED_PRACTICE') {
            return myWords.filter(e => !e.memorized);
        }
        return myWords;
    }
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Header />
                {this.props.myIsAdding ? <Form /> : null}
                <FlatList
                    data={this.getWordList()}
                    renderItem={({ item }) => <Word myWord={item} />}
                    keyExtractor={item => item.id}
                />
                <Filter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding
    };
}

export default connect(mapStateToProps)(Main);
