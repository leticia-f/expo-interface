import React from 'react'
import { styles } from '../meusEstilos/styleRN'
import { View, Text } from 'react-native'
function Escolhido(props) {
    return (
        <>
            <View style={styles.bodyEscolhido}>
                <View style={styles.boxTitle}>
                    <Text style={styles.textEscolhidoTitle}>{props.escolhido.title}</Text>
                </View>
                <View style={styles.boxDescription}>
                    <Text style={styles.textEscolhidoDescription}>{props.escolhido.description} </Text>
                </View>
                <View style={styles.boxDescription}>
                    <Text style={styles.textEscolhidoInfo}>Lançamento: {props.escolhido.release_date}</Text>
                    <Text style={styles.textEscolhidoInfo}>Direção: {props.escolhido.director} </Text>
                    <Text style={styles.textEscolhidoInfo}>Duração: {props.escolhido.running_time} minutos </Text>
                    <Text style={styles.textEscolhidoInfo}>Nota {props.escolhido.rt_score} no Rotten Tomatoes </Text>
                </View>
            </View>
        </>
    )
}

export default Escolhido