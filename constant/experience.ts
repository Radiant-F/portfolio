import { ImageSourcePropType } from "react-native";

export type ExperienceType = {
  company: string;
  image: ImageSourcePropType;
  role: string;
  contract: string;
  achievement: string[];
};
export const experiences: ExperienceType[] = [
  {
    company: "Freelance",
    image: require("@/assets/images/experiences/freelancer.png"),
    role: "Full-stack",
    achievement: [
      "Developed full-stack social media application with Firebase Authentication, Cloud Firestore, Firebase Cloud Storage and Firebase Cloud Messaging.",
      "Developed React Native apps with Firebase Cloud Messaging (FCM) for push notification.",
      "Developed pharmacy management app using ReactJS.",
      "Acquired Expo Application Services (EAS) publishing to build, submit and update React Native Expo application.",
    ],
    contract: "January 2023 - Present",
  },
  {
    company: "Remote Worker Indonesia",
    image: require("@/assets/images/experiences/rwid.png"),
    role: "React Native, JavaScript & VIP Super Intensive Mentoring",
    achievement: [
      "Teach remotely on a weekly basis using his own curriculum.",
      "Work remotely on projects with clear online communication.",
      "Acquired Clockify time tracker and timesheet app to track work hours.",
      "Working with a team for various projects.",
    ],
    contract: "December 2022 - Present",
  },
  {
    company: "Pondok Digital",
    image: require("@/assets/images/experiences/pondok-digital.png"),
    role: "Front-end Mobile Developer & IT Support",
    achievement: [
      "Developed management apps with vehicle loan system and employee habit tracking.",
      "Developed React Native apps with Firebase Cloud Messaging (FCM) for push notification.",
      "Acquired handling response from back-end with Redux Toolkit (RTK) Query for proper and scalable data management.",
      "Acquired progressive and responsive UI for a better user experience with various devices.",
    ],
    contract: "December 2021 - May 2023",
  },
  {
    company: "Pondok IT",
    image: require("@/assets/images/experiences/pondok-it.png"),
    role: "Front-end Mobile Developer & IT Support",
    achievement: [
      "Developed management apps with location-based employee presence and QR code presence system.",
      "Developed car community apps with event management and SOS system with Google Maps API.",
      "Developed e-commerce apps with Midtrans integration as payment gateway.",
      "Acquired Play Store publishing for testing and production release application management.",
    ],
    contract: "June 2021 - May 2023",
  },
];
