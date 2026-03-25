import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';
import { View } from 'react-native-web';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        alignItems: 'center',
    }, 

    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        paddingVertical: 10,
        width: '100%',
        textAlign: 'center',
        color: 'darkslategrey',
        borderColor: 'darkslategrey',
        borderRadius: 20,
    }, 

    imagem: {
        width: '90%',
        resizeMode: 'contain',
    },
});

export default styles;