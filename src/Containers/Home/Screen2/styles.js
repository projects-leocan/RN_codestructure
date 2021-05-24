import { StyleSheet, Platform } from 'react-native';
import * as Constant from '../../../constants/constants';

const isTab = Constant.isTab;
const isNotch = Constant.isNotch;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },

    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },

    titleText: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 30
    }

})

export default styles;
