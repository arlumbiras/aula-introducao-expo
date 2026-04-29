import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Atividade06() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(0);
    const [mens, setMens] = useState('');
    const [corBotao, setCorBotao] = useState('#000dff');

    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const p = parseFloat(peso);
        const a = parseFloat(altura);

        if (!p || !a) {
            setMens(mensErro);
            return;
        }

        const tmpImc = p / (a * a);
        setImc(tmpImc);

        
        if (tmpImc < 18.5) {
            setMens("Abaixo do peso");
            setCorBotao('red');
        } else if (tmpImc < 25) {
            setMens("Peso normal");
            setCorBotao('green');
        } else if (tmpImc < 30) {
            setMens("Sobrepeso");
            setCorBotao('orange');
        } else {
            setMens("Obesidade");
            setCorBotao('red');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6</Text>

            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>
                {isNaN(imc) ? mensErro : 'O IMC é:\n' + imc.toFixed(2)}
            </Text>

            <Text style={[styles.imc, styles.txtMensagem, {color: corBotao}]}>
                {mens}
            </Text>

            <Pressable 
    onPress={calculaImc}
    style={({ pressed }) => [
        {
            backgroundColor: pressed ? '#333' : corBotao,
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            width: '95%',
            alignItems: 'center'
        }
    ]}
>
    <Text style={{ color: '#fff', fontSize: RFValue(22), fontWeight: 'bold' }}>
        Calcular
    </Text>
</Pressable>
        </View>
    )
}