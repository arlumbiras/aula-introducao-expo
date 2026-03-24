import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#81aed1', 
        // margin: 20,
        padding: RFPercentage (2),
        flex: 1,
        borderRadius: RFPercentage (2),
    },
    titulo: {
        fontSize: RFPercentage (3), 
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage (5),
    },
    texto: {
        fontSize: RFPercentage (9),
    },
    texto2: {
    fontSize: RFPercentage (5),
    fontWeight: '300',
    color: '#2c3e50',
    textAlign: 'right',
    width: '100%',
    marginBottom: RFPercentage (2),
    paddingRight: RFPercentage (9) ,
    fontFamily: "'Playfair Display', Georgia, serif",
    borderBottom: '2px solid #3498db',
    paddingBottom: RFPercentage (5),
    opacity: 0.9,
    },
});

export default styles;