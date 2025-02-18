import { Button, View } from "react-native";
import { Gap, Text } from "@/components";
import { router } from "expo-router";

export default function Lost() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>
        Hmm? Where are you going?{`\n`}There is absolutely "nothing" to see
        here!
        {`\n`}Use this default button to go back.
      </Text>
      <Gap height={10} />
      <Button
        title="back home"
        onPress={() => {
          router.canDismiss() && router.dismissAll();
          router.replace("/");
        }}
      />
    </View>
  );
}
