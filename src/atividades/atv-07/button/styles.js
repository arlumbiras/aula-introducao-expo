import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
        height: (Dimensions.get('window').height / 6) - 6,
        width: (Dimensions.get('window').width / 4) - 8.5,
        padding: RFValue(10),
        backgroundColor: '#000000',
        borderWidth: RFValue(1),
        borderColor: '#ffffff',
        justifyContent: 'center',
    },
    txtButton: {
        fontSize: RFPercentage(5),
        textAlign: 'center',
        color: '#ffffff',
    },
    operationButton: {
        backgroundColor: '#ff006a',
    },
    operationTxtButton: {
        color: '#000000',
    },
    buttonDouble: {
        width: ((Dimensions.get('window').width / 4) - 8.5) * 2,
    },
    buttonTriple: {
        width: ((Dimensions.get('window').width / 4) - 8.5) * 3,
    },
});
export default styles;