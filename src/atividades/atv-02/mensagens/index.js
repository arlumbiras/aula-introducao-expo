import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Mensagem({titulo, descricao, valor, imagem}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{descricao}</Text>
            <Text style={styles.mensagem}>{valor}</Text>
            <Image source={imagem}style={{ width: 120, height: 120 }}
            />
        </View>
    );
}

export default Mensagem;