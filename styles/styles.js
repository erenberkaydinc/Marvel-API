import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  SafeAreaStyle: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  //HEADER STYLES
  Headercontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    backgroundColor: "#F0131E",
  },
  HeaderText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Bold",
  },
  //SEARCH BAR
  SearchStyle: {
    alignItems: "center",
    marginBottom: "5%",
    marginTop: "5%",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  //LOGO
  Logo: {
    flex: 1,
    height: "100%",
    width: "26%",
    resizeMode: "contain",
    //  aspectRatio: 1.5,
  },

  //FLAT LIST STYLES
  FlatListStyle: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    padding: 15,
    margin: 15,
  },
  FlatListText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Bold",
    textAlign:'center'
  },
  FlatListDesc: {
    fontSize: 13,
    color: "black",
    fontWeight: "500",
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Bold",
    textAlign: "center",
  },
  //DETAIL SCREEN
  DetailScreenContainer: {
    
    justifyContent: "center",
    alignItems: "center",
  },
  DetailScreenTitle:{
    fontSize: 25,
    paddingTop:10,
    color: "black",
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Bold",
    textAlign: "center",
  },
  DetailScreenDesc:{
    fontSize: 18,
    padding:15,
    color: "black",
    fontWeight: "500",
    fontFamily: Platform.OS === "android" ? "Roboto" : "AvenirNext-Bold",
    textAlign: "center",
},
});

export default styles;
