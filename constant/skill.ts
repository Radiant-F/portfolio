import SvgReactNative from "../components/skill/SvgReactNative";
import SvgReactNativeExpo from "../components/skill/SvgReactNativeExpo";
import SvgPlayConsole from "../components/skill/SvgPlayConsole";
import SvgFirebase from "../components/skill/SvgFirebase";
import SvgRedux from "../components/skill/SvgRedux";
import SvgGitHub from "../components/skill/SvgGitHub";
import SvgNotifee from "../components/skill/SvgNotifee";
import SvgAxios from "../components/skill/SvgAxios";
import SvgFigma from "../components/skill/SvgFigma";
import SvgTrello from "../components/skill/SvgTrello";
import SvgNotion from "../components/skill/SvgNotion";

export type SkillType = {
  title: string;
  Svg: React.ComponentType<{ width: number; height: number }>;
  ability: { title: string; description: string }[];
};

export const skills: SkillType[] = [
  {
    title: "React Native CLI",
    Svg: SvgReactNative,
    ability: [
      {
        title: "Android",
        description:
          "Setup, develop and maintain Native/React Native Android on macOS, Windows and Linux.",
      },
      {
        title: "iOS",
        description:
          "Setup, develop and maintain Native/React Native iOS on macOS.",
      },
      {
        title: "Windows",
        description:
          "Setup, develop and maintain React Native Windows on Windows.",
      },
      {
        title: "Debugging",
        description:
          "App debugging with Developer Menu, DevTools, LogBox and Perf Monitor.",
      },
    ],
  },
  {
    title: "React Native Expo",
    Svg: SvgReactNativeExpo,
    ability: [
      {
        title: "Setup Development",
        description:
          "Setup, develop and maintain React Native Expo for Android, iOS and Web on macOS, Windows and Linux.",
      },
      {
        title: "Expo Go",
        description:
          "Quickly experiment and design prototyping with native Android and iOS apps.",
      },
      {
        title: "Expo Application Services (EAS)",
        description:
          "- Development Build:\nCreate a development build for Android and iOS applications.\n\n- Preview Build:\nCreate and share preview build for Android and iOS applications.\n\n- Production Build:\nCreate and publish production build for Android applications to Google Play Store.",
      },
      {
        title: "Expo Router",
        description:
          "Manage navigation between screens with file-based routing for Android, iOS and web applications.",
      },
      {
        title: "Expo Web",
        description:
          "First-class support for building full-stack websites with React. Statically rendered for SEO and performance, or client-rendered for a more app-like experience in the browser.",
      },
      {
        title: "Expo Continous Native Generation (CNG) and Prebuild",
        description:
          "Keep up to date with the latest operating system releases to avoid falling too far behind in any third-party dependencies.",
      },
      {
        title: "Expo GitHub Build",
        description:
          "Automatically triggers builds from GitHub repository using PR label, pushed code to the repository or manually from Expo Builds page.",
      },
    ],
  },
  {
    title: "Play Console",
    Svg: SvgPlayConsole,
    ability: [
      {
        title: "Developer Account",
        description:
          "Personal developer account. The account was created before November 2023, which means that any app submission can immediately go into production without a test release.",
      },
      {
        title: "Test and Release",
        description:
          "- Testing:\nCreate and manage open, closed and internal testing releases to selected groups of testers or anyone.\n\n- Production:\nCreate and manage production releases to make the app available to all users in chosen countries.",
      },
      {
        title: "App Signing",
        description:
          "Manage and protect app keys for app signing, upload certificates and credentials.",
      },
      {
        title: "Store Listing",
        description:
          "Create tailored content to help users find and engage with the app, with or without custom store listing.",
      },
      {
        title: "Policy Status",
        description:
          "Manage and maintain developer compliance with Google Play Developer Program policies.",
      },
    ],
  },
  {
    title: "Firebase",
    Svg: SvgFirebase,
    ability: [
      {
        title: "Authentication",
        description:
          "Setup and manage user authentication with email and password, Google sign in, anonnymous sign in and more.",
      },
      {
        title: "Firestore Database",
        description:
          "Setup and manage rules for scalable NoSQL cloud database to store and synchronize data. Keep data in sync across client applications with real-time listeners and offline support.",
      },
      {
        title: "Cloud Storage",
        description:
          "Setup and manage rules for online cloud storage to store and serve user-generated content, such as photos or videos.",
      },
      {
        title: "Cloud Messaging",
        description:
          "Setup and manage native integration of Firebase Cloud Messaging (FCM) for both Android & iOS, allowing for server-device and device-device communication.",
      },
    ],
  },
  {
    title: "Redux Toolkit",
    Svg: SvgRedux,
    ability: [
      {
        title: "State Management",
        description:
          "Setup state management utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.",
      },
      {
        title: "RTK Query",
        description:
          "Setup and manage RTK Query data fetching and caching tool.\n\nSetup and create RTK Query APIs such as createApi and fetchBaseQuery.\n\nCreate query customization to extend fetchBaseQuery to enabling automatic re-authorization and more.",
      },
      {
        title: "TypeScript",
        description:
          "Extend the use of the redux toolkit with strict typing and preserving all types of the redux API.",
      },
    ],
  },
  {
    title: "GitHub",
    Svg: SvgGitHub,
    ability: [
      {
        title: "Repository",
        description:
          "Create and maintain all project files, including the revision history.",
      },
      {
        title: "Push & Pull",
        description:
          "Move changes from the local repo to the remote or bring changes to the local repo from the remote.",
      },
      {
        title: "Branching",
        description:
          "Create and manage repository branch to develop features, fix bugs, or safely experiment with new ideas in a contained area.",
      },
      {
        title: "Pull Request",
        description:
          "Create a proposal to merge a set of changes from one branch into another.",
      },
      {
        title: "Resolve Conflict",
        description:
          "Resolve simple merge conflicts that involve competing line changes on GitHub, using the conflict editor or VS Code extention.",
      },
    ],
  },
  {
    title: "Notifee",
    Svg: SvgNotifee,
    ability: [
      {
        title: "Notification",
        description: "Create and manage notification for both Android and iOS.",
      },
      {
        title: "Event Listener",
        description:
          "Handling notification and device events for foreground and background event.",
      },
      {
        title: "Interaction",
        description:
          "Handling notification interaction using Event Type for delivered, pressed, dismissed, action press notification and more.",
      },
      {
        title: "Firebase Cloud Messaging",
        description:
          "Integrate Firebase Cloud Messaging and display notifications with Notifee.",
      },
    ],
  },
  {
    title: "HTTP Request Axios",
    Svg: SvgAxios,
    ability: [
      {
        title: "Axios API",
        description:
          "Create a request with various Axios methods and configurations.",
      },
      {
        title: "Axios Instance",
        description: "Create a new instance of axios with a custom config.",
      },
      {
        title: "Interceptors",
        description:
          "Create interceptors for requests or responses before they are handled by then or catch.",
      },
      {
        title: "Cancellation",
        description:
          "Setup cancellation to prematurely terminate the connection to prevent a call from hanging up.",
      },
    ],
  },
  {
    title: "Figma",
    Svg: SvgFigma,
    ability: [
      {
        title: "Design",
        description:
          "Create and manage app designs to get an idea of how the app will look to the end user.",
      },
      {
        title: "Prototype",
        description:
          "Visualize application prototype to understand the application workflow.",
      },
    ],
  },
  {
    title: "Trello",
    Svg: SvgTrello,
    ability: [
      {
        title: "Project Management",
        description:
          "Visual tool to manage project workflow and task tracking.",
      },
    ],
  },
  {
    title: "Notion",
    Svg: SvgNotion,
    ability: [
      {
        title: "Project Management",
        description: "Productivity and note-taking web application.",
      },
    ],
  },
];
