import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';

const altura = (Dimensions.get('window').height / 6) - 9;

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: RFValue(18),
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'flex-end',
        width: '100%',
    },
    displayValue: {
        fontSize: altura >= 144 ? RFPercentage(5) : RFPercentage(8),
        color: '#000000',
    },
});

export default styles;