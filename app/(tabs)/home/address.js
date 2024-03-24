import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

const address = () => {
  const handleBack = () => {};

  const handleNext = () => {};

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FEBE10",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>
        <Text style={{ flex: 1, fontSize: 16, fontWeight: "500" }}>
          Choose your address
        </Text>
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="cross" size={24} color="white" />
        </View>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>

        <Pressable
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" size={24} color="#0066b2" />
        </Pressable>

        <Pressable
          style={{
            width: 54,
            height: 54,
            borderRadius: 27,
            backgroundColor: "#F5F5F5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="back-in-time" size={24} color="#0066b2" />
        </Pressable>

        <Pressable
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#A0A0A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Entypo name="chevron-right" size={24} color="white" />
        </Pressable>
      </View>

      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          padding: 15,
          alignItems: "center",
          gap: 12,
          marginTop: "auto",
        }}
      >
        <Pressable
          onPress={handleBack}
          style={{
            backgroundColor: "#d0d0d0",
            padding: 15,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "500" }}>Back</Text>
        </Pressable>

        <Pressable
          onPress={handleNext}
          style={{
            backgroundColor: "#0066b2",
            padding: 15,
            borderRadius: 10,
            flex: 1,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "500" }}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default address;

const styles = StyleSheet.create({});
