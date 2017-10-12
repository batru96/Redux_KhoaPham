import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchError, fetchSuccess, startFetchData, fetchDataThunk } from '../redux/ActionCreators';
import getTemp from '../api/GetTemp';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        };
    }

    getWeatherMessage() {
        const { cityName, isLoading, error, temp } = this.props;
        if (isLoading) {
            return '...Loading';
        }
        if (error) return 'Vui long thu lai';
        if (!cityName) return 'Nhap ten thanh pho';
        return `${cityName} --- ${temp}oF`;
    }

    getTempByCityName() {
        const { cityName } = this.state;
        // this.props.startFetchData();
        // getTemp(cityName)
        //     .then(temp => this.props.fetchSuccess(cityName, temp))
        //     .catch(() => this.props.fetchError());
        this.props.fetchDataThunk(cityName);
    }

    render() {
        const { container, input, button, buttonText, message } = styles;
        return (
            <View style={container}>
                <Text style={message}>{this.getWeatherMessage()}</Text>
                <TextInput
                    style={input}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({ cityName: text })}
                />
                <TouchableOpacity style={button} onPress={() => this.getTempByCityName()}>
                    <Text style={buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        isLoading: state.isLoading,
        error: state.error
    };
}

export default connect(mapStateToProps, {
    fetchError, fetchSuccess, startFetchData, fetchDataThunk
})(Main);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: 'white',
        fontSize: 30,
        marginBottom: 40
    },
    button: {
        padding: 10,
        backgroundColor: 'gray'
    },
    buttonText: {
        color: 'white'
    },
    input: {
        margin: 10,
        width: 300,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        color: 'white'
    }
});
