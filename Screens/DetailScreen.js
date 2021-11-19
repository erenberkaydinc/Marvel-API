import React,{useState} from 'react'
import { View, Text,Image } from 'react-native'
import styles from "../styles/styles";
import Header from '../components/Header';
import {Card} from 'react-native-elements'

const DetailScreen = ({ navigation,route  }) => {

    const {HeroDetail} = route.params;
    
    const [hero,setHero] = useState({
        title:HeroDetail.name,
        desc:HeroDetail.description,
    });

    return (
        <View style={styles.DetailScreenContainer} >
           


            <Image 
             source={{ uri: `${HeroDetail.thumbnail.path}/landscape_incredible.jpg` }}
             style={{
                 width: 464,
                 height: 261,
                 resizeMode: "contain",
                 
                }}
                />
            

            <Text style={styles.DetailScreenTitle} >{hero.title}</Text>
            {
                (hero.desc === "")
                ?
                <Text style={styles.DetailScreenDesc} >No Description for this hero :(</Text>
                :
                <Text style={styles.DetailScreenDesc} >{hero.desc}</Text>
            } 
           
        </View>
    )
}

export default DetailScreen
