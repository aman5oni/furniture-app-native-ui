import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Couches = ({ onPress, src, name }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 30,
        backgroundColor: "#FFF",
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
      }}
    >
      <Image
        source={src}
        style={{
          width: 170,
          height: 110,
          borderRadius: 10
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10
        }}
      >
        <Text
          style={{
            color: "#4f4a4a",
            fontSize: 12
          }}
        >
          {name}
        </Text>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: "red",
            marginHorizontal: 4
          }}
        ></View>
        <Text
          style={{
            color: "red",
            fontSize: 9,
          }}
        >
          New
        </Text>
      </View>
      <Text
        style={{
          fontSize: 9,
          color: "#4f4a4a",
        }}
      >
        Full sleeves short dress with three attractive colors and and available
        in various sizes.
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          width: "100%"
        }}
      >
        <View
          style={{
            width: "80%"
          }}
        >
          <Text
            style={{
              fontSize: 15,
            }}
          >
            324.69 USD
          </Text>
        </View>
        <View
          style={{
            width: "20%"
          }}
        >
          <Image
            source={require("../images/add.png")}
            style={{
              alignSelf: "flex-end",
              width: 25,
              height: 25
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Couches;
