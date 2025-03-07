import { Linking, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { contacts } from "@/constant";
import Button from "../Button";

export default function Social() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, bottom: insets.bottom + 20 }}>
      {contacts.map((v, i) => (
        <Button
          key={i}
          onPress={async () => {
            await Linking.openURL(v.url);
          }}
          iconRightFA6={v.iconName}
          title=""
          style={styles.btn}
          primary={false}
          iconSize={30}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    margin: 5,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 20,
    alignSelf: "flex-start",
    position: "absolute",
  },
});
