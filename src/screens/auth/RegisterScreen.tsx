import React, { useContext, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Alert, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { authStyles } from '../../themes/authTheme'
import Logo from '../../assets/tweeter.svg';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/auth/AuthProvider';

interface Props extends StackScreenProps<any, any> {}

const RegisterScreen = ({ navigation }:Props) => {

  const { signUp, errorMessage, removeError } = useContext(AuthContext)

  const { email, password, name, onChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Login Error!', errorMessage, [
      {
        text: 'OK',
        onPress: () => removeError()
      }
    ])

  }, [errorMessage])


  const onSubmit = () => {
    console.log({email, password, name});
    signUp({email, password, name})
  }


  return (
    <View style={{flex: 1}}>

    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={authStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={
        authStyles.containerLogoFoms
      }>
        
        <View style={authStyles.containerLogo}>
          <Logo width={250} height={100} />
        </View>
        

        <View style={authStyles.continerForms}>
            <Text style={authStyles.title}>Register User</Text>

            <View style={authStyles.containerForm}>
              
              <Text style={authStyles.label}>Username</Text>
              <TextInput 
                style={authStyles.inputText}
                placeholder='Name'
                keyboardType='default'
                onChangeText={(value: string) =>onChange(value, 'name')}
              />

            </View>

            <View style={authStyles.containerForm}>
              
              <Text style={authStyles.label}>Email</Text>
              <TextInput 
                style={authStyles.inputText}
                placeholder='email@email.com'
                keyboardType='email-address'
                onChangeText={(value: string) =>onChange(value, 'email')}
              />

            </View>

            <View style={authStyles.containerForm}>
              
              <Text style={authStyles.label}>Password</Text>
              <TextInput
                style={authStyles.inputText} 
                placeholder='*******'
                secureTextEntry
                onChangeText={(value: string) =>onChange(value, 'password')}
              />

            </View>

        </View>

        <View style={authStyles.containerButton}>
              <TouchableOpacity 
                onPress={onSubmit}
                style={authStyles.button}>
                <Text style={authStyles.textButton}>Register</Text>
              </TouchableOpacity>
            </View>

        <View style={authStyles.containerNavigation}>
          <Text style={authStyles.textNavigation}>Adready a member? </Text>
          <TouchableOpacity onPress={()=> navigation.replace('LoginScreen')}>
            <Text style={authStyles.navigation}>Login</Text>
          </TouchableOpacity>
          
        </View>

        

      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen