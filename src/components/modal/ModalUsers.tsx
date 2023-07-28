import React, { useState, useEffect } from 'react'
import { Modal,Pressable,ScrollView,StyleSheet,Text,View,FlatList, ActivityIndicator } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import UsersFollow from './UsersFollow';
import tweeterApi from '../../api/apiTweeter';
import { FollowResponse, IUserFollow } from '../../interface/followInterface';


interface Props{
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void;
    follow: {follow: string, name: string, username: string};
}

const ModalUsers = ({modalVisible, setModalVisible, follow}:Props) => {

  const [isLoding, setIsLoding] = useState(true)
  const [data, setData] = useState<IUserFollow[]>([])
  console.log(follow);
  // https://app-tweet-backend-production.up.railway.app/api/user/followers/641a68dd8db1946fba68252b
  
  async function getUsers(){
    try {
        setIsLoding(true)
        const resp = await tweeterApi.get<FollowResponse>(`user/${follow.follow}`)
        console.log(resp.data);
        setData(resp.data.data)
        setIsLoding(false)
    } catch (error) {
        console.log(error);
        
    }
    
    
  }

  useEffect(()=>{
    getUsers()
    return () => {
      setData([])
    }
  },[follow])


  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View 
            style={styles.centeredView}
        >
          <View 
            style={styles.modalView}
          >

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.modalText}>{follow.username} is {follow.name}</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Icon name='close-outline' size={35}/>
                </Pressable>
            </View>
            
                {
                  isLoding
                  ? <ActivityIndicator size='large' color='black'/>
                  : <FlatList 
                      data={data}
                      keyExtractor={(item)=>item.uid}
                      renderItem={({item})=><UsersFollow user={item} following={ follow.name === 'Followings' } />}
                      ItemSeparatorComponent={()=>(<View style={{padding:5}}></View>)}
                      showsVerticalScrollIndicator={false}
                    />
                }
                


          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .6)',
    },
    modalView: {
      width: '100%',
      height: '95%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      fontWeight: '600',
    },
  });
  

export default ModalUsers