import { FluidAnimation, Galery, Gap, Social, Welcome } from "@/components";
import { useAppSelector } from "@/hooks";
import { StyleSheet, View } from "react-native";

export default function Home() {
  const show_galery = useAppSelector(
    (state) => state.settings.layout_home.show_galery
  );

  return (
    <View style={{ flex: 1 }}>
      <FluidAnimation />
      <Social />

      <View style={{ flex: 1 }} />

      <View
        style={{
          ...styles.container,
          flexDirection: show_galery ? "row" : undefined,
        }}
      >
        <Welcome />
        <Galery />
      </View>

      <View style={{ flex: 1 }} />

      <View style={{ height: 175 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    maxWidth: 1000,
    alignSelf: "center",
    width: "100%",
  },
});
