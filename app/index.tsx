import {
  ButtonCommon,
  FluidAnimation,
  Galery,
  Gap,
  Social,
  Text,
} from "@/components";
import { ManropeExtraBold } from "@/constant";
import { router } from "expo-router";
import { StyleSheet, useWindowDimensions, View } from "react-native";

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <FluidAnimation />

      <Gap flex={width >= 1000 ? 0.5 : 0.25} />

      <View
        style={{
          ...styles.container,
          flexDirection: width >= 1000 ? "row" : "column",
          alignSelf: width >= 1000 ? "auto" : "center",
        }}
      >
        <View style={{ maxWidth: 375 }}>
          <Gap flex={0.25} />
          <Text style={{ fontFamily: ManropeExtraBold, fontSize: 35 }}>
            Welcome!{"\n"}The name is{" "}
            <Text style={{ fontFamily: ManropeExtraBold }} highlight>
              Radiant
            </Text>
            .
          </Text>
          <Gap height={15} />
          <Text secondary>
            A skilled mobile and web developer. Offer many solutions for your
            front-end needs.
          </Text>
          <Gap height={20} />
          <ButtonCommon
            onPress={() => router.navigate("/work")}
            title="Check out my works"
            iconRightMCI="chevron-right"
            textGap={5}
            style={styles.btn}
          />
        </View>

        {width >= 1000 && <Galery width={300 * 1.3} height={400 * 1.3} />}
      </View>

      <Gap flex={1} />

      <Social />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 60,
    borderRadius: 60 / 2,
  },
  container: {
    padding: 20,
    justifyContent: "space-evenly",
  },
});
