import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Text from "../Text";

export function Android() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#256629",
        borderColor: "#43A047",
      }}
    >
      <Icon name={"android"} size={20} color={"#43A047"} />
      <Text style={{ marginHorizontal: 5, color: "#C8E6C9" }}>Android</Text>
    </View>
  );
}

export function IOS() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#1565C0",
        borderColor: "#42A5F5",
      }}
    >
      <Icon name={"apple-ios"} size={20} color={"#42A5F5"} />
      <Text style={{ marginHorizontal: 5, color: "#BBDEFB" }}>iOS</Text>
    </View>
  );
}

export function Web() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#6A1B9A",
        borderColor: "#BA68C8",
      }}
    >
      <Icon name={"web"} size={20} color={"#BA68C8"} />
      <Text style={{ marginHorizontal: 5, color: "#E1BEE7" }}>Web</Text>
    </View>
  );
}

export function ReactNative() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#1C88A0",
        borderColor: "#62EFFF",
      }}
    >
      <Icon name={"react"} size={20} color={"#62EFFF"} />
      <Text style={{ marginHorizontal: 5, color: "#E0F7FA" }}>
        React Native
      </Text>
    </View>
  );
}

export function ReactNativeExpo() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#1C88A0",
        borderColor: "#62EFFF",
      }}
    >
      <Icon name={"react"} size={20} color={"#62EFFF"} />
      <Text style={{ marginHorizontal: 5, color: "#E0F7FA" }}>
        React Native Expo
      </Text>
    </View>
  );
}

export function PlayStore() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#237A3E",
        borderColor: "#42D77D",
      }}
    >
      <Icon name={"google-play"} size={20} color={"#42D77D"} />
      <Text style={{ marginHorizontal: 5, color: "#C8E6C9" }}>Play Store</Text>
    </View>
  );
}

export function Firebase() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#E5A91A",
        borderColor: "#FFC947",
      }}
    >
      <Icon name={"firebase"} size={20} color={"#FFC947"} />
      <Text style={{ marginHorizontal: 5, color: "#FFF8E1" }}>Firebase</Text>
    </View>
  );
}

export function Laravel() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#B02E2E",
        borderColor: "#FF4F4F",
      }}
    >
      <Icon name={"laravel"} size={20} color={"#FF4F4F"} />
      <Text style={{ marginHorizontal: 5, color: "#FAD4D4" }}>Laravel</Text>
    </View>
  );
}

export function MongoDB() {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#114B2D",
        borderColor: "#26A56A",
      }}
    >
      <Icon name={"leaf"} size={20} color={"#26A56A"} />
      <Text style={{ marginHorizontal: 5, color: "#C8E6C9" }}>MongoDB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 30 / 2,
    margin: 5,
  },
});
