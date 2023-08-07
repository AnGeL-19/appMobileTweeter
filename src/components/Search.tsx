import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'

const Search = () => {
  return (
    <View
        style={{
          width: '100%',
          position: 'absolute',
          top: 80,
          zIndex: 100,
          paddingHorizontal: 10,
          marginBottom: 15,
          
        }}
      >
        <View style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#828282'
        }}>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}>
            <Icon name="search-outline" size={25} />
            <TextInput
              placeholder='Search'
              style={{
                flex:1,
                fontSize: 18,
                paddingEnd: 10
              }}
            />
          </View>
          
          <TouchableOpacity
                  style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  paddingHorizontal: 20,
                  backgroundColor: '#2F80ED',
                  borderRadius: 5,
                  }}
              >
                  <Text style={{
                  color: 'white',
                  fontWeight: '500'
                  }}>Tweet</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Search