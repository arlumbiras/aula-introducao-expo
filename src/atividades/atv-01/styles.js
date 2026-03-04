import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#81aed1', 
        // margin: 20,
        padding: 20,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30, 
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    texto: {
        fontSize: 18,
    },
    texto2: {
    fontSize: 52,
    fontWeight: '300',
    color: '#2c3e50',
    textAlign: 'right',
    width: '100%',
    marginBottom: 25,
    paddingRight: 15,
    fontFamily: "'Playfair Display', Georgia, serif",
    borderBottom: '2px solid #3498db',
    paddingBottom: 10,
    opacity: 0.9,
    },
});

export default styles;