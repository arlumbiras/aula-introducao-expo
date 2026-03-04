import { View, Text }  from 'react-native';

import styles from './styles';

function atividade01 () {
    return (
        <View style={styles.container} >
            <Text style={styles.titulo} > Atividade 1 </Text>
            <Text style={styles.texto} >
                QUERIA MUITO UMA CERVEJA
            </Text>
            <Text style={styles.texto2} >
                MAS NÃO VOU TER
            </Text>
        </View>
    );
};

export default atividade01;