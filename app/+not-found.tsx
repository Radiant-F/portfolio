import { Button, View, Text as TextDefault } from "react-native";
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
      <TextDefault
        style={{
          fontFamily: "font",
          fontSize: 50,
          position: "absolute",
          bottom: 0,
          right: 0,
          height: 30,
          textAlign: "center",
          textAlignVertical: "center",
          color: "black",
          opacity: 0.1,
        }}
        selectable={false}
      >
        dying
      </TextDefault>
    </View>
  );
}
