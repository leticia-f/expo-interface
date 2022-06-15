import React, { useState } from 'react'
import { Quadro } from '../meusEstilos/styledComponents'
import { styles } from '../meusEstilos/styleRN'
import { View, Text, Image, Modal } from 'react-native'
import { TextoAdicional, TextoOriginal, TextoReturn } from '../meusEstilos/styledComponents'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { TouchableOpacity } from 'react-native-web'
import Escolhido from '../escolhido/index'

function QuadroFinal(props) {
    const [escolhido, setEscolhido] = useState("");
    return (
        <>
            <Quadro style={styles.body}>
                <View style={styles.quadro}>
                    <View style={styles.header}>
                        <TextoAdicional style={styles.text}>{props.item.title}</TextoAdicional>
                        <TextoOriginal> {props.item.original_title} </TextoOriginal>
                    </View>
                    <Image
                        style={{ width: 196, height: 294 }}
                        source={{ uri: props.item.image }}
                    />
                    <TouchableOpacity onPress={() => setEscolhido(props.item)}>
                        <AiOutlineInfoCircle style={styles.icon} name="icon" size={25} />
                    </TouchableOpacity>
                </View>
            </Quadro>
            <Modal visible={escolhido}>
                    <Escolhido escolhido={escolhido} />
                    <TouchableOpacity onPress={() => setEscolhido("")}>
                        <View style={styles.desescolher}>
                            <TextoReturn style={styles.text}> Voltar </TextoReturn>
                        </View>
                    </TouchableOpacity>
            </Modal>
        </>
    )
}

export default QuadroFinal