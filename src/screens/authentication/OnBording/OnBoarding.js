import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native'
import COLOURS from '../../../constents/COLOURS';
import LinearGradient from 'react-native-linear-gradient';



const OnBoarding = () =>  {
    return (
        <View>
            <StatusBar barStyle='dark-content' backgroundColor={COLOURS.bgLineGradOne} />
            <LinearGradient 
            colors={[
                COLOURS.bgLineGradOne, 
                COLOURS.bgLineGradTwo, 
                COLOURS.bgLineGradThre, 
                COLOURS.bgLineGradFour, 
                COLOURS.bgLineGradFive, 
                COLOURS.bgLineGradSix]} style={{width: '100%',height: '100%'}}>
                    <View>
                        <View>
                            <Image source={require("../")}/>
                        </View>
                    </View>
            
            </LinearGradient>
        </View>
        
    )
}

export default OnBoarding;