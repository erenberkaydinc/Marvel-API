import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'
import styles from '../styles/styles';

const Header = () => {
    return (
        <View style={styles.Headercontainer} >
            {/* <Text style={styles.HeaderText} >Marvel</Text> */}
            <Image resizeMode="contain" source={require('../src/logo.png')} style={styles.Logo}  />
        </View>
    )
}

 

export default Header;
