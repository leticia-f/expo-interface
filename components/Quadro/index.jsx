import React from 'react'
import { Quadro } from '../meusEstilos/styledComponents'
import { styles } from '../meusEstilos/styleRN'
import { View, Text, Image } from 'react-native'
import { TextoAdicional, TextoOriginal } from '../meusEstilos/styledComponents'
import { AiOutlineInfoCircle } from "react-icons/ai"

function QuadroFinal(props) {
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
                    <TextoAdicional style={styles.textData}>{props.item.release_date}</TextoAdicional>
                    <AiOutlineInfoCircle style={styles.icon} name="icon" size={25} />
                </View>
            </Quadro>
        </>
    )
}

export default QuadroFinal