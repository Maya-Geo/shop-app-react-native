import { StatusBar } from "expo-status-bar";
import React from "react";
import BackIcon from "react-native-vector-icons/AntDesign";
import CartIcon from "react-native-vector-icons/AntDesign";
import { AirbnbRating } from "react-native-ratings";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

const App = () => {
  const list = [
    {
      name: "Hoodie Jacket Classic",
      price: "$76",
      Img: require("./assets/jacket.jpg"),
    },

    {
      name: "Puffer Warm Jacket",
      price: "$45",
      Img: require("./assets/winter.jpg"),
    },

    {
      name: "Parka Jacket Coat",
      star: "stars",
      price: "$60",
      Img: require("./assets/coat.jpeg"),
    },

    {
      name: "Women Quilted Jacket",
      price: "$51",
      Img: require("./assets/hood.webp"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.IconsView}>
          <BackIcon name="arrowleft" style={styles.BackIcon} />
        </View>

        <View styles={styles.IconsView}>
          <CartIcon name="shoppingcart" style={styles.CartIcon} />
        </View>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 50,
          fontSize: 22,
          top: 80,
          right: 98,
        }}
      >
        Women's Jacket
      </Text>

      <View style={styles.TitleSearch}>
        <TextInput
          type="text"
          placeholder="search jacket"
          style={styles.SearchInput}
        />
        <Text style={styles.filtertext}>Filter</Text>
      </View>

      <View style={styles.JacketView}></View>

      <FlatList
        data={list}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View style={styles.Jacketitem}>
              <View style={styles.jacketimages}>
                <Image
                  style={{
                    width: 70,
                    height: 90,
            
                  }}
                  source={item.Img}
                />
              </View>
              <View></View>

              <View style={styles.jacketnames}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 20, fontWeight: "500" }}>
                    {item.name}
                  </Text>
                </View>
              </View>

              <View style={styles.PriceList}>
                <Text>{item.price}</Text>
              </View>

              <View style={styles.reviews}>
                <AirbnbRating
                  count={5}
                  defaultRating={item.defaultRating}
                  size={15}
                  showRating={false}
                  is
                  disabled={true}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    paddingHorizontal: 16,
    flex: 100,
    margin: 0,
  },

  header: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  IconsView: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 5,
    color: "gray",
  },

  BackIcon: {
    fontSize: 20,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    borderRadius: 100 / 5,
  },

  CartIcon: {
    color: "#75760DeF",
    fontSize: 30,
    padding: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
  },

  filtertext: {
    position: "absolute",
    left: 310,
    top: 80,
    fontSize: 12,
    color: "#757DEF",
    fontWeight: "bold",
  },

  SearchInput: {
    backgroundColor: "snow",
    padding: 16,
    fontSize: 15,
    top: 60,
    height: 49,
    borderRadius: 130,
    paddingRight: 0,
  
  },

  TitleSearch: {
    flex: 37,
    position: "relative",
  },

  JacketView: {
    flex: 82,
  },

  jacketitem: {
    overflow: "hidden",
    borderWidth: 1,
    flex: 2.5,
    elevation: 5,
    width: 100,
    height: 60,
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    marginHorizontal: 16,
  },

  jacketimages: {
    top: 50,
    width: 100,
    height: 60,
  },

  jacketnames: {
    flexDirection: "row",
    marginLeft: 128,
  },

  PriceList: {
    marginLeft: 174,
    fontSize: 30,
  },
});

export default App;
