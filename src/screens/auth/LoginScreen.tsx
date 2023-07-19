import React, { useContext, useEffect } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert, 
  Platform } from 'react-native';
import Logo from '../../assets/tweeter.svg';
import { authStyles } from '../../themes/authTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/auth/AuthProvider';
interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({navigation}:Props) => {

  const { signIn, errorMessage, removeError } = useContext(AuthContext)

  const { email, password, onChange } = useForm({
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
    console.log({email, password});
    signIn({email, password})
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
                <Text style={authStyles.title}>Login</Text>

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
                    <Text style={authStyles.textButton}>Enter</Text>
                  </TouchableOpacity>
                </View>

            <View style={authStyles.containerNavigation}>
              <Text style={authStyles.textNavigation}>"Not adready a member yet" </Text>
              <TouchableOpacity onPress={()=> navigation.replace('RegisterScreen')}>
                  <Text style={authStyles.navigation}>Register</Text>
              </TouchableOpacity>
            
            </View>

          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen