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
});