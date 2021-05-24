import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from './styles';
import * as Constant from '../../../constants/constants';

export default class Screen2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }

    }

    // lifecycle methos that call when screen is mount
    componentDidMount() {
        // get params 
        const { params } = this.props.route;
        if (params !== undefined) {
            const data = params.data;
            this.setState({ data: data });
        }
    }

    // button click function for Go To Screen 1
    onScreen1 = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { data } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.rootContainer}>
                    <Text style={styles.titleText}>Screen 2</Text>
                    <Text style={styles.titleText}>Screen1 Data: {data}</Text>
                    <Button title="Go To Screen 1" onPress={this.onScreen1}></Button>
                </View>
            </SafeAreaView>
        )
    }
}