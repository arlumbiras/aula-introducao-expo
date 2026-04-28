import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles
from './styles';

export default function Atividade06() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const mensErro = 'Valores inseridos de forma incorreta!';
    const [mens, setMens] = useState('');

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }
    function setMens() {
        if (calculaImc < 18.5) {
        titulo = "Abaixo do peso";
        texto = "Seu peso está abaixo do recomendado.";
        classe = "azul-claro";
       } else if (calculaImc < 25) {
        titulo = "Peso normal";
        texto = "Parabéns! Você está dentro do peso adequado.";
        classe = "azul";
         } else if (imc < 30) {
        titulo = "Sobrepeso";
        texto = "Atenção! Seu peso está acima do recomendado.";
        classe = "laranja";
      }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro :'O IMC é: \n' + imc.toFixed(2) + }</Text>

            <Text style={[styles.imc, styles.txtMensagem]}>Mensagem</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}