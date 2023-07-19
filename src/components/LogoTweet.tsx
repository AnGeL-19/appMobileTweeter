import React from 'react'
import { View, Text, StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';
import { SvgXml } from 'react-native-svg';


interface Props{
    image?: ImageSourcePropType | string;
    styleImage?: StyleProp<ImageStyle>;
}

const LogoTweet = ({ image, styleImage }:Props) => {
  return (
    <View >
        
        
    </View>
  )
}

export default LogoTweet