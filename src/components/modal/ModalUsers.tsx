import React, { useState } from 'react'
import { Modal,Pressable,ScrollView,StyleSheet,Text,View } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import UsersFollow from './UsersFollow';

interface Props{
    modalVisible: boolean,
    setModalVisible: (value: boolean) => void;
}

const ModalUsers = ({modalVisible, setModalVisible}:Props) => {

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
                <Text style={styles.modalText}>Daniel Jensen is following</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Icon name='close-outline' size={35}/>
                </Pressable>
            </View>
            
            <ScrollView 
              showsVerticalScrollIndicator={false}
              style={{
                flexDirection: 'column',
                gap: 10
              }}
            >
                
                {/* Flat List */}
                <UsersFollow />
                <UsersFollow />
                <UsersFollow />
                <UsersFollow />

            </ScrollView>

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