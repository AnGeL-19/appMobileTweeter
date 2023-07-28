import React, { useContext } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile';
import { AuthContext } from '../../context/auth/AuthProvider';
import { useForm } from '../../hooks/useForm';
import tweeterApi from '../../api/apiTweeter';
import Comments from './Comments';

interface Props{
    idTweet: string;
}
// {valueComment, onChange}:Props
const InputPost = ({idTweet}:Props) => {

    const { user } = useContext(AuthContext)
    const { comment, onChange } = useForm({comment: ''})

    const handleSubmit = async() => {

        console.log(comment);
    
        try {
            
            const resp = await tweeterApi.post(`tweet/msg`, {
                idTweet,
                comment
            })
            console.log(resp.data);
            onChange('',"comment")
            
        } catch (error) {
            console.log(error.response.data);
            
        }
    }


  return (
    <View
        style={styles.container}
    >
        
        <Profile user={user!} onlyImage  />

        <View style={styles.containerInput}>
            <TextInput 
                style={styles.inputText}
                placeholder="Tweet your reply" 
                onChangeText={(value)=>onChange(value,'comment')}
                value={comment}
            />
            
            {
                (comment.trim().length > 2)
                &&
                <TouchableOpacity 
                onPress={handleSubmit}
                style={{
                    ...styles.btnSend,
                }} >
                    <Icon name="send-outline" size={20} color='#2F80ED'/>
                </TouchableOpacity>
            }
            

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
        paddingRight: 80
    },
    btnSend: {
        position: 'absolute',
        right: 35,
        padding: 10
    },
    btnGallery: {
        position: 'absolute',
        right: 5,
        padding: 10
    }

})

export default InputPost