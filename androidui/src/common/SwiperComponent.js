import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../images/unnamed.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/unnamed.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/unnamed.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

export default SwiperComponent;
