import React, { useContext, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../Profile';
import { ComentPerson } from '../../interface/postInterface';
import { usePostActions } from '../../hooks/usePostActions';
import { AuthContext } from '../../context/auth/AuthProvider';

interface Props{
    comment: ComentPerson
}

const Comment = ({comment}:Props) => {

    const { user } = useContext(AuthContext)
    const { actionTweet, data, isLoading } = usePostActions()
    const [commentTweet, setCommentTweet] = useState(comment)

    const handleLike = () => {

        console.log('loked');

        actionTweet('likeCmmt',{idComment: comment.cid})       
        
        if (!data.ok) return;

        const isUser = commentTweet.likes.find( idUser => idUser === user?.uid )

        let userLiked: string[] = []
        if (isUser) {
            userLiked = commentTweet.likes.filter( idUser => idUser !== user?.uid)
        }else{
            userLiked = [...commentTweet.likes, user?.uid!]
        }

        const likeUnlike = {
            ...commentTweet,
            likes: userLiked,
            nLikes: userLiked.length
        }

        setCommentTweet(likeUnlike)
       
    }

  return (
    <View style={styles.container}>
        {/* image profile */}
        <Profile user={comment.userComment} onlyImage  />

        {/* comment info */}
        <View style={styles.containerCommentsInfo}>

            <View style={styles.containerLikesAndInfo}>

                <View style={styles.containerInfo}>
                    <Text style={styles.textUsername}>{comment.userComment.name}</Text>
                    <Text style={styles.date}>25 agust at 2012</Text>
                </View>
                <View >
                    <Text style={styles.textInfo}>{comment.commentText}</Text>
                </View>
            </View>
            <View style={styles.containerLikes}>
                <TouchableOpacity
                    style={styles.btnLike}
                    onPress={ handleLike }
                >
                    <Icon 
                    name={ commentTweet.likes.find( idUser => idUser === user?.uid) ? 'heart' : 'heart-outline'}
                    size={20} style={{
                        fontWeight: 'bold',
                    }} 
                    color={ commentTweet.likes.find( idUser => idUser === user?.uid) ? '#EB5757' : 'grey' } />
                    <Text style={{ color: commentTweet.likes.find( idUser => idUser === user?.uid) ? '#EB5757' : 'grey' }}>
                        { commentTweet.likes.find( idUser => idUser === user?.uid) ? 'Liked' : 'Like' }
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text>
                        {commentTweet.nLikes} {commentTweet.nLikes > 1 ? 'Likes': 'Like'}
                    </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 15
    },
    containerCommentsInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 5
    },
    containerLikesAndInfo: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        padding: 5,
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    textUsername: {
        fontSize:16, 
        fontWeight: '500'
    },
    date: {
        fontSize:14, 
        fontWeight: '400'
    },
    textInfo: {
        fontSize:16, 
        fontWeight: '400'
    },
    containerLikes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    btnLike: {  
        flexDirection: 'row',
        alignItems: 'center',
    
        gap: 5   
    },


})

export default Comment