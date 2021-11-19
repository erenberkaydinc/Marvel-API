import React,{useState} from 'react'
import { View, Text,TextInput } from 'react-native'
import styles from "../styles/styles";
import { SearchBar } from 'react-native-elements';


const Search = ({search}) => {

    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <SearchBar 
        value={text}
        onChangeText={(e)=>onSearch(e)}
        placeholder="Type here" 
        inputContainerStyle={{
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            
        }}
        containerStyle={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#C40233',
            
        }}
        
        round={true}

        />

       
    )
}

export default Search;


// old style searchbox
//  // <View style={styles.SearchStyle} >
//         //     <TextInput 
//         //     value={text}
//         //     onChangeText={(e)=>onSearch(e)}
//         //     placeholder="Search" 
            
//         //     />
//         // </View>