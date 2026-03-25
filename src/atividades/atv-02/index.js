import { View, Text, Image } from 'react-native';

import styles from './styles';

import branco from '../../../assets/camisaBranca.png';
import azul from '../../../assets/brasilAzul.jpg';
import preta from '../../../assets/brasilPreta.jpg';
import amarela from '../../../assets/brasilAmarela.png';

import Mensagem from './mensagens';

function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Revisão Atividade 2</Text>


            <Mensagem
                titulo={'Camiseta Branco'}
                descricao={'Camiseta Branco seleção Brasileira'}
                valor={'R$ 250,00'}
                imagem={branco} 
            />
            <Mensagem
                titulo={'Camiseta Azul'}
                descricao={'Camiseta Azul seleção Brasileira'}
                valor={'R$ 350,00'}
                imagem={azul}
            />
            <Mensagem
                titulo={'Camiseta Preta'}
                descricao={'Camiseta Preta seleção Brasileira'}
                valor={'R$ 450,00'}
                imagem={preta}
            />
            <Mensagem
                titulo={'Camiseta Amarela'}
                descricao={'Camiseta Amarela seleção Brasileira'}
                valor={'R$ 550,00'}
                imagem={amarela}
            />

        </View>
    );
}

export default Atividade02;