import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }
     
    function handleDesincrementa() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(numero - numero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade03</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <View style={styles.botao}>
                <Button
                    title='-1'
                    color={'darkslategrey'}
                    onPress={handleDesincrementa}
                />
            </View>

            <Text style={styles.valor}>{numero}</Text>
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>ZERAR</Text>
            </TouchableOpacity>
            

        </View>
    );
}

export default Atividade03;