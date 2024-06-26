import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";

const index = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart", cart);
  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#0066b2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
          Basket Total
        </Text>
        <View>
          <Text style={{ fontSize: 16, color: "white" }}>Rs 0</Text>
          <Text style={{ fontSize: 16, color: "white" }}>FOR 0 Items</Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 7,
          marginTop: 20,
          marginHorizontal: 10,
          height: 200,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          YOUR BASKET IS EMPTY
        </Text>
      </View>

      <Pressable
        onPress={() => router.push("/basket/select")}
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          width: 200,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 4,
          backgroundColor: "#0066b2",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Place an Order
        </Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
