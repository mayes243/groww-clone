import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Alert } from "react-native";
import {
  appleAuth,
  appleAuthAndroid,
} from "@invertase/react-native-apple-authentication";
import { Platform } from "react-native";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

export const signInWithAppleAndroid = async () => {
  try {
    const rawNonce = uuid();
    const state = uuid();

    appleAuthAndroid.configure({
      clientId: "YOUR_KEY",
      redirectUri: "YOUR_KEY",
      responseType: appleAuthAndroid.ResponseType.ALL,
      scope: appleAuthAndroid.Scope.ALL,
      nonce: rawNonce,
      state,
    });

    const response = await appleAuthAndroid.signIn();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithAppleIos = async () => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      const token = appleAuthRequestResponse;
      console.log("Token", appleAuthRequestResponse);
    }
  } catch (error) {
    console.error("Error signing in with Apple:", error);
    throw error;
  }
};

export const signInWithApple = async () => {
  if (Platform.OS == "ios") {
    signInWithAppleIos();
  } else {
    signInWithAppleAndroid();
  }
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken);
    Alert.alert("Token");
  } catch (error) {
    console.log(error);
  }
};

export default {
  signInWithGoogle,
};
