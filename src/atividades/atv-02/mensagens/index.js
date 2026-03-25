import { View, Text } from 'react-native'; 

import styles from './styles';

function Mensagem({titulo, descricao, valor}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{descricao}</Text>
            <Text style={styles.mensagem}>{valor}</Text>
        </View>
    );
}

export default Mensagem;