import { FlatList, Linking, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { contacts, type ContactType } from "@/constant";
import {
  Text,
  Gap,
  Card,
  LoadingOverlay,
  ButtonCommon,
  TextInput,
} from "@/components";
import { useIsFocused } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAppSelector } from "@/hooks";

export default function Contact() {
  const [messageWA, setMessageWA] = useState<string>("");
  const [messageTelegram, setMessageTelegram] = useState<string>("");
  const [messageGmail, setMessageGmail] = useState<{
    subject: string;
    body: string;
  }>({ subject: "", body: "" });

  function onChangeMessage(message: string, social: ContactType["name"]) {
    switch (social) {
      case "WhatsApp":
        return setMessageWA(message);
      case "Gmail":
        return setMessageGmail({ subject: message, body: message });
      case "Telegram":
        return setMessageTelegram(message);
      default:
        return console.log("unknown social");
    }
  }

  async function onSendMessage(contact: ContactType) {
    try {
      const encodedMessage = encodeURIComponent(
          contact.name == "WhatsApp" ? messageWA : messageTelegram
        ),
        messageUrl = `${contact.url}${`?text=${encodedMessage}`}`;

      switch (contact.name) {
        case "WhatsApp":
          await Linking.openURL(messageUrl);
          break;
        case "Gmail":
          const encodedSubject = encodeURIComponent(messageGmail.subject);
          const encodedBody = encodeURIComponent(messageGmail.body);
          const messageEmail = `${contact.url}?subject=${encodedSubject}&body=${encodedBody}`;
          await Linking.openURL(messageEmail);
          break;
        case "Telegram":
          await Linking.openURL(messageUrl);
          break;
        default:
          return Linking.openURL(contact.url);
      }
    } catch (error) {
    } finally {
    }
  }

  const performance = useAppSelector((state) => state.settings.performance);
  const isFocused = useIsFocused();

  const [data, setData] = useState<ContactType[]>([]);

  useEffect(() => {
    if (performance == "default") {
      if (isFocused) {
        setTimeout(() => {
          setData(contacts);
        }, 750);
      } else setData([]);
    } else data.length == 0 && setData(contacts);
  }, [isFocused, performance]);

  if (data.length == 0) return <LoadingOverlay />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<Gap bottomGapNavBar />}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Text style={{ fontSize: 30 }} bold>
          Get in{" "}
          <Text bold highlight>
            Touch
          </Text>
          !
        </Text>
      }
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Animated.View
            entering={
              performance == "default"
                ? FadeInDown.delay(index * 100)
                : undefined
            }
            style={{ overflow: "hidden" }}
          >
            <Card style={{ marginVertical: 10, padding: 20 }}>
              <View style={styles.viewHeader}>
                <View style={styles.containerIcon}>
                  <item.Icon name={item.iconName} color="#e1f2fe" size={30} />
                </View>
                <Text style={styles.textSocialName} bold>
                  {item.name}
                </Text>
                <ButtonCommon
                  style={styles.btnLink}
                  primary={false}
                  onPress={() => onSendMessage(item)}
                  iconLeftFA6={"paper-plane"}
                  title={item.customMessage != "none" ? "Send" : "Visit"}
                  textGap={5}
                />
              </View>
              <Gap height={item.customMessage != "none" ? 10 : 0} />
              {item.customMessage == "text" && (
                <TextInput
                  placeholder="With a message..."
                  multiline
                  numberOfLines={3}
                  value={item.name == "WhatsApp" ? messageWA : messageTelegram}
                  onChangeText={(message) =>
                    onChangeMessage(message, item.name)
                  }
                />
              )}
              {item.customMessage == "email" && (
                <View>
                  <TextInput
                    placeholder="Subject..."
                    placeholderTextColor={"#adb4bf"}
                    value={messageGmail.subject}
                    onChangeText={(subject) =>
                      setMessageGmail({ ...messageGmail, subject })
                    }
                  />
                  <Gap height={10} />
                  <TextInput
                    placeholder="Body..."
                    placeholderTextColor={"#adb4bf"}
                    multiline
                    numberOfLines={3}
                    value={messageGmail.body}
                    onChangeText={(body) =>
                      setMessageGmail({ ...messageGmail, body })
                    }
                  />
                </View>
              )}
            </Card>
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnLink: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingLeft: 15,
  },
  viewInput: {
    minHeight: 45,
    maxHeight: 100,
    backgroundColor: "#3c4857",
    borderRadius: 45 / 2,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    elevation: 5,
  },
  containerIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textSocialName: {
    fontSize: 17,
    flex: 1,
    textAlign: "center",
  },
  viewContainer: {
    backgroundColor: "#1e1f24",
    borderWidth: 5,
    borderColor: "#373e4e",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    elevation: 5,
  },
  container: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 600,
    marginVertical: 40,
  },
});
