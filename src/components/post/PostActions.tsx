import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { usePostActions } from '../../hooks/usePostActions';
import { IDetailPost, IPost } from '../../interface/postInterface';
import { AuthContext } from '../../context/auth/AuthProvider';

interface Props {
    idTweet: string;
    setShowInput: (value: boolean) => void;
    showInput: boolean;
    detailPost: IDetailPost;
    setDetailPost: (value: IDetailPost) => void;
}

const PostActions = ({idTweet ,detailPost, setDetailPost ,showInput, setShowInput }: Props) => {

    const { user } = useContext(AuthContext)
    const { actionTweet, data, isLoading } = usePostActions()

    const handleComment = () => {
        setShowInput(!showInput)
    }

// HACER EL FETCH DE LAS ACCIONES 

    const handleLike = () => {

        console.log('loked');

        actionTweet('like',{idTweet})       

        if (!data.ok) return;

        const isUser = detailPost.likes.find( idUser => idUser === user?.uid )

        let userLiked: string[] = []
        if (isUser) {
            userLiked = detailPost.likes.filter( idUser => idUser !== user?.uid)
        }else{
            userLiked = [...detailPost.likes, user?.uid!]
        }

        const likeUnlike: IDetailPost = {
            ...detailPost,
            likes: userLiked,
            nLikes: userLiked.length
        }

        setDetailPost(likeUnlike)
       
    }

    const handleRetweet = () => {
        console.log('retwwet');

        actionTweet('retweet',{idTweet})       

        if (!data.ok) return;

        const isRetweet = detailPost.retweet.find( idUser => idUser === user?.uid )

        let userRetweeted: string[] = []
        if (isRetweet) {
            userRetweeted = detailPost.retweet.filter( idUser => idUser !== user?.uid)
        }else{
            userRetweeted = [...detailPost.retweet, user?.uid!]
        }

        const retweetDesetweet: IDetailPost = {
            ...detailPost,
            retweet: userRetweeted,
            nRetweets: userRetweeted.length
        }

        setDetailPost(retweetDesetweet)
    }

    const handleSave = () => {
        console.log('retwwet');

        actionTweet('save',{idTweet})       

        if (!data.ok) return;

        const isSaved = detailPost.saved.find( idUser => idUser === user?.uid )

        let userSaved: string[] = []
        if (isSaved) {
            userSaved = detailPost.saved.filter( idUser => idUser !== user?.uid)
        }else{
            userSaved = [...detailPost.saved, user?.uid!]
        }

        const savedUnsave: IDetailPost = {
            ...detailPost,
            saved: userSaved,
            nSaved: userSaved.length
        }

        setDetailPost(savedUnsave)
    }

  return (
    <View
        style={{
            paddingVertical: 5,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#F2F2F2',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            marginBottom: 15,
        }}
    >
        <TouchableOpacity
            onPress={handleComment}
            style={{
                paddingHorizontal: 25,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon 
            name={ showInput ? 'chatbox' : 'chatbox-outline'}
            size={25}  />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleRetweet}
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon 
            name={ detailPost.likes.find( idUser => idUser === user?.uid) ? 'refresh' : 'refresh-outline'}
            size={25} 
            color={ detailPost.retweet.find( idUser => idUser === user?.uid) ? '#27AE60' : 'grey' }
            />
        </TouchableOpacity>

        <TouchableOpacity
            onPress={handleLike}
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon 
            name={ detailPost.likes.find( idUser => idUser === user?.uid) ? 'heart' : 'heart-outline'}
            size={25} style={{
                fontWeight: 'bold',
            }} 
            color={ detailPost.likes.find( idUser => idUser === user?.uid) ? '#EB5757' : 'grey' }
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={handleSave}
            style={{
                paddingHorizontal: 25,
                paddingVertical: 5,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Icon
            name={ detailPost.saved.find( idUser => idUser === user?.uid) ? 'bookmark' : 'bookmark-outline'}
            size={25} 
            color={ detailPost.saved.find( idUser => idUser === user?.uid) ? '#2D9CDB' : 'grey' }
            />
        </TouchableOpacity>
    </View>
  )
}

export default PostActions