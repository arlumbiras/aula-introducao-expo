import { View, Text }  from 'react-native';

import styles from './styles';

function atividade01 () {
    return (
        <View style={styles.container} >
            <Text style={styles.titulo} > Atividade 1 </Text>
            <Text style={styles.texto} >
                AULA DE REACT NATIVE COM EXPO
            </Text>
            <Text style={styles.texto2} >
                QUERIA MUITO UMA CERVEJA
            </Text>
        </View>
    );
};

export default atividade01;