import { StyleSheet, View } from "react-native";
import React from "react";
import Gap from "../Gap";
import ButtonCommon from "../ButtonCommon";
import Text from "../Text";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={{ maxWidth: 375 }}>
      <Text style={{ fontSize: 35 }} bold>
        Welcome!{"\n"}The name is{" "}
        <Text bold highlight>
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
      <Gap height={10} />
      <ButtonCommon
        onPress={() => router.navigate("/about")}
        title="More about me"
        iconRightMCI="chevron-right"
        textGap={5}
        primary={false}
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 60,
    borderRadius: 60 / 2,
  },
});
