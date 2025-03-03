import {
  ScrollView,
  StyleSheet,
  Text as TextDefault,
  View,
} from "react-native";
import { Text, Gap } from "@/components";

export default function About() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title} bold>
          Muhammad{" "}
          <Text bold highlight>
            Radiant
          </Text>{" "}
          Fadilah
        </Text>

        <Gap height={20} />

        <Text style={{ textAlign: "center" }}>Wall of text ahead!</Text>

        <Gap height={20} />

        <Text>
          When he was 18, he started a programming journey by joining a
          non-formal, community-driven education at Pondok IT. From not knowing
          anything at all to a fully nerdy person with confusing stuff in his
          head! Confusing in a good way, of course. He never fails to deliver
          and always goes the extra mile to make something happen. (source:
          trust me bro <Text italic>wink wink</Text>){`\n`}
          {`\n`}
          Radiant, also known as ExKoi, sometimes considers himself to be bi.
          This depends on who he is talking to. If you want to know Koi's
          opinion about LGBTQ+ stuff, it is best for you to ask him directly.
          However, in my opinion, Koi is chill with it, provided that you avoid
          involving him in the conversation. You do you, kinda thing.{`\n`}
          {`\n`}He loves cats and is a massive nerd about technology. His
          motivation is simple: badass anime woman! Like Raiden Ei, for example.
          I hope his future wife doesn't read this far. I mean, this man is{" "}
          <Text italic>still</Text> sane and <Text italic>still</Text> knows the
          difference between fantasy and real life. In the other words, he is
          old but young at heart.{`\n`}
          {`\n`}
          No, no, this "About" section is not written by him in the third
          person. He is bad at describing himself. Like, BAD bad. (especially in
          English!). Then who wrote this "About" section?
        </Text>

        <Gap bottomGapNavBar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "font",
    fontSize: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 30,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    opacity: 0.25,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    alignSelf: "center",
    width: "80%",
    maxWidth: 600,
    marginVertical: 40,
  },
});
