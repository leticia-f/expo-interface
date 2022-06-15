import { StyleSheet } from 'react-native'
import { withTheme } from 'styled-components';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#3A585C',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        padding: 20,
        fontFamily: 'Montserrat-Medium',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
    },
    end: {
        paddingBottom: 20,
        fontFamily: 'Montserrat-Medium',
    },
    icon: {
        position:'absolute',
        backgroundColor: '#FFF',
    },
    quadro: {
        backgroundColor: '#2b4245',
        alignItems:"center",
        height: 450,
        width: 300,
        marginBottom: 20, 
        borderRadius: 5,
    },
    textData: {
        marginBottom:30,
        fontFamily: 'Montserrat-Medium',
    },
    boxDescription: {
        backgroundColor: '#2b4245',
        margin: 10,
        padding: 18,
    },
    bodyEscolhido: {
        padding: 30,
        paddingTop: 150,
        alignItems:"center",
        flex: 1,
        backgroundColor: '#3A585C',
    },
    textEscolhidoTitle: {
        color: '#FFF',
        fontSize: 40,
        margin: 15,
    },
    textEscolhidoDescription: {
        color: '#FFF',
        fontSize: 20,
    },
    textEscolhidoInfo: {
        color: '#FFF',
        fontSize: 20,
    },
    desescolher: {
        backgroundColor: '#3A585C',
    },
});