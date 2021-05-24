import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from './styles';
import * as Constant from '../../../constants/constants';

export default class Screen1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    // button click function for Go To Screen 2
    onScreen2 = () => {
        const { navigate } = this.props.navigation;
        navigate('Screen2', {
            data: 'Hello from Screen 1'
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.rootContainer}>
                    <Text style={styles.titleText}>Screen 1</Text>
                    <Button title="Go To Screen 2" onPress={this.onScreen2}></Button>
                </View>
            </SafeAreaView>
        )
    }
}