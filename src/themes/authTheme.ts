import { StyleSheet } from 'react-native'

export const authStyles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 20
    },
    containerLogoFoms: {
        width: '100%',
        marginBottom: 50
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10
    },
    continerForms: {
        flexDirection: 'column',
        gap: 10,
        
    },
    containerForm:{
        flexDirection: 'column'
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
        marginBottom: 5
    },
    inputText: {
        fontSize: 16,
        color: '#9e9e9e',
        borderWidth: 1,
        borderColor: '#BABABA',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    containerButton: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: 10,
        width: 200,
        backgroundColor: '#2f80ed',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    containerNavigation: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textNavigation: {
        fontSize: 15
    },
    navigation: {
        color: '#30b8f7',
        fontSize: 16,
        fontWeight: 'bold'
    }
    
})