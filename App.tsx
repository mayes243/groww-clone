import React from "react";
import Navigation from "./src/navigation/Navigation";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "YOUR_KEY",
  forceCodeForRefreshToken: true,
  offlineAccess:false,
  iosClientId:
    "YOUR_KEY",
});

const App = () => {
  return <Navigation />;
};

export default App;
