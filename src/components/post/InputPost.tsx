import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile';

const InputPost = () => {
  return (
    <View
        style={styles.container}
    >
        
        <Profile onlyImage  />

        <View style={styles.containerInput}>
            <TextInput 
                style={styles.inputText}
                placeholder="Tweet your reply" 
                
            />
            <TouchableOpacity style={
                styles.btnGallery
            } >
                <Icon name="image-outline" size={20} />
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 15,
    },
    containerInput: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center'
    },
    inputText: {
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 45
    },
    btnGallery: {
        position: 'absolute',
        right: 5,
        padding: 10
    }

})

export default InputPost