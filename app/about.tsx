import { ScrollView, StyleSheet } from "react-native";
import { Text, Gap } from "@/components";
import { ManropeExtraBold } from "@/constant";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Muhammad{" "}
        <Text style={{ fontFamily: ManropeExtraBold }} highlight>
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
        head! Confusing in a good way, of course. He never fails to deliver and
        always goes the extra mile to make something happen. (source: trust me
        bro <Text style={{ fontStyle: "italic" }}>wink wink</Text>){`\n`}
        {`\n`}
        Radiant, also known as ExKoi, sometimes considers himself to be bi. This
        depends on who he is talking to. If you want to know Koi's opinion about
        LGBTQ+ stuff, it is best for you to ask him directly. However, in my
        opinion, Koi is chill with it, provided that you avoid involving him in
        the conversation. You do you, kinda thing.{`\n`}
        {`\n`}He loves cats and is a massive nerd about technology. His
        motivation is simple: badass anime woman! Like Raiden Ei, for example. I
        hope his future wife doesn't read this far. I mean, this man is{" "}
        <Text style={{ fontStyle: "italic" }}>still</Text> sane and{" "}
        <Text style={{ fontStyle: "italic" }}>still</Text> knows the difference
        between fantasy and real life. In the other words, he is old but young
        at heart.{`\n`}
        {`\n`}
        No, no, this "About" section is not written by him in the third person.
        He is bad at describing himself. Like, BAD bad. (especially in
        English!). Then who wrote this "About" section?
      </Text>

      <Gap bottomGapNavBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: ManropeExtraBold,
    fontSize: 35,
    textAlign: "center",
  },
  container: {
    alignSelf: "center",
    width: "80%",
    maxWidth: 600,
    marginVertical: 40,
  },
});
