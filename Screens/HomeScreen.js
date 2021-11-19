import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import styles from "../styles/styles";
import { FlatGrid } from "react-native-super-grid";

const hash = "6000e27157fc4765d03414aac87b201f";

const HomeScreen = ({ navigation }) => {
 
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  

  useEffect(() => {
    const fetch = async () => {
      if (query === "") {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?limit=10&ts=1637190178659&apikey=4aaa43347e63c913633f9a543663d812&hash=${hash}`
        );
        setItems(result.data.data.results);
        setLoading(false);
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&limit=10&ts=1637190178659&apikey=4aaa43347e63c913633f9a543663d812&hash=${hash}`
        );
        setItems(result.data.data.results);
        setLoading(false);
      }
    };

    fetch();
  }, [query]);


  //LIST STYLE
  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail", { HeroDetail: item });
          }}
        >
          <Image
            source={{ uri: `${item.thumbnail.path}/standard_xlarge.jpg` }}
            style={{
              width: 180,
              height: 180,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.FlatListText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color="#F0131E" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <StatusBar style="auto" />
          <Header />
          <Search search={(q) => setQuery(q)} />

          <FlatGrid itemDimension={180} data={items} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
