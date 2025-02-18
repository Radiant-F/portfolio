// import Android from "@/components/work/Android";
// import Firebase from "@/components/work/Firebase";
// import IOS from "@/components/work/IOS";
// import Laravel from "@/components/work/Laravel";
// import MongoDB from "@/components/work/MongoDB";
// import PlayStore from "@/components/work/PlayStore";
// import ReactNative from "@/components/work/ReactNative";
// import ReactNativeExpo from "@/components/work/ReactNativeExpo";
// import Web from "@/components/work/Web";
import {
  Android,
  Firebase,
  IOS,
  Laravel,
  MongoDB,
  PlayStore,
  ReactNative,
  ReactNativeExpo,
  Web,
} from "../components/work/Tags";

import { ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export type WorkType = {
  name: string;
  description: string;
  icon: ImageSourcePropType;
  tag: React.ComponentType[];
  link: { icon: keyof typeof Icon.glyphMap; url: string; name: string }[];
  images: ImageSourcePropType[];
};

export const works: WorkType[] = [
  {
    name: "Firebase Sandbox",
    description:
      "All about React Native Expo with Firebase shenanigans! You can write post, message people, create your task and more!",
    icon: require("@/assets/images/work/2/logo.png"),
    tag: [Android, IOS, ReactNativeExpo, Firebase, PlayStore],
    link: [
      {
        icon: "github",
        url: "https://github.com/Radiant-F/RNExpoFirebaseSandbox",
        name: "GitHub",
      },
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.rnfirebasesandbox",
        name: "Play Store",
      },
    ],
    images: [
      require("@/assets/images/work/1/promotion1.png"),
      require("@/assets/images/work/1/promotion2.png"),
      require("@/assets/images/work/1/promotion3.png"),
      require("@/assets/images/work/1/promotion4.png"),
    ],
  },
  {
    name: "Portfolio",
    description:
      "My portfolio website you're seeing right now is made in React Native Expo for three platforms! Coming soon for Windows, macOS and Linux.",
    icon: require("@/assets/images/work/1/logo.png"),
    tag: [Android, IOS, Web, ReactNativeExpo, PlayStore],
    link: [
      { icon: "github", url: "https://github.com/Radiant-F", name: "GitHub" },
    ],
    images: [
      require("@/assets/images/work/2/promotion1.png"),
      require("@/assets/images/work/2/promotion2.png"),
      require("@/assets/images/work/2/promotion3.png"),
      require("@/assets/images/work/2/promotion4.png"),
    ],
  },
  {
    name: "Panther Mania",
    description:
      "This is a community app for Panther EV owner in Indonesia. Member can send SOS 'signal' to any near distance member via Google Map API, create gathering events, merchandise store and much more. This is one of the most complex and challenging project I've ever worked on!",
    icon: require("@/assets/images/work/3/logo.png"),
    tag: [Android, ReactNative, Laravel, PlayStore],
    link: [
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.panthermania",
        name: "Play Store",
      },
    ],
    images: [
      require("@/assets/images/work/3/promotion1.png"),
      require("@/assets/images/work/3/promotion2.png"),
      require("@/assets/images/work/3/promotion3.png"),
      require("@/assets/images/work/3/promotion4.png"),
    ],
  },
  {
    name: "Pondok Digital",
    description:
      "The all-in-one management app! Pakced with features such as habit tracker, employee attendance location based QR code scanner, car loan, and more. This is also one of the most complex and challenging project I've ever worked on!",
    icon: require("@/assets/images/work/4/logo.png"),
    tag: [Android, ReactNative, Laravel, PlayStore],
    link: [
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.pondokdigital",
        name: "Play Store",
      },
    ],
    images: [
      require("@/assets/images/work/4/promotion1.png"),
      require("@/assets/images/work/4/promotion2.png"),
      require("@/assets/images/work/4/promotion3.png"),
      require("@/assets/images/work/4/promotion4.png"),
    ],
  },
  {
    name: "SiManajemen",
    description:
      "Employee managemen system. Registered employee can use attendance feature with location based QR code scanner and create thier daily target.",
    icon: require("@/assets/images/work/7/logo.png"),
    tag: [Android, ReactNative, Laravel, PlayStore],
    link: [
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.simanajemen",
        name: "Play Store",
      },
    ],
    images: [
      require("@/assets/images/work/7/promotion1.png"),
      require("@/assets/images/work/7/promotion2.png"),
      require("@/assets/images/work/7/promotion3.png"),
      require("@/assets/images/work/7/promotion4.png"),
    ],
  },
  {
    name: "Queue Clear",
    description:
      "A small project that jumpstart my programming journey. This is a to-do list app with authentication and data fecthing with backend.",
    icon: require("@/assets/images/work/5/logo.png"),
    tag: [Android, IOS, Web, ReactNativeExpo, MongoDB, PlayStore],
    link: [
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.exkoi.dev.TaskManagerApp",
        name: "Play Store",
      },
      {
        icon: "github",
        url: "https://github.com/Radiant-F/TaskManagerApp-Expo",
        name: "GitHub",
      },
    ],
    images: [
      require("@/assets/images/work/5/promotion1.png"),
      require("@/assets/images/work/5/promotion2.png"),
      require("@/assets/images/work/5/promotion3.png"),
      require("@/assets/images/work/5/promotion4.png"),
    ],
  },
  {
    name: "Task Manager",
    description: "A simple CRUD app with MMKV for local storage.",
    icon: require("@/assets/images/work/6/icon.png"),
    tag: [Android, IOS, Web, ReactNativeExpo, PlayStore],
    link: [
      {
        icon: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.exkoi.dev.TaskManager",
        name: "Play Store",
      },
      {
        icon: "github",
        url: "https://github.com/Radiant-F/TaskManagerApp-Expo",
        name: "GitHub",
      },
    ],
    images: [
      require("@/assets/images/work/6/promotion1.png"),
      require("@/assets/images/work/6/promotion2.png"),
      require("@/assets/images/work/6/promotion3.png"),
      require("@/assets/images/work/6/promotion4.png"),
    ],
  },
];
