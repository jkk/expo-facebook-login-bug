import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Facebook from "expo-facebook";

export default function App() {
  let [loginResult, setLoginResult] = React.useState(null);

  async function onFacebookLogin() {
    try {
      await Facebook.initializeAsync({ appId: "1310861962685645" });
      let result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"]
      });
      setLoginResult(result);
    } catch (err) {
      Alert.alert(`${err.name}: ${err.message}`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 20}}>
        <Text style={{fontSize: 18, fontWeight: "bold"}}>
          Expo Facebook Login Bug
        </Text>
      </View>
      <View style={{paddingBottom: 20}}>
        <Pressable onPress={onFacebookLogin}>
          <Text style={{fontSize: 16, color: "blue"}}>
            Continue with Facebook
          </Text>
        </Pressable>
      </View>
      <View>
        <Text style={{fontSize: 16}}>
          {JSON.stringify(loginResult, undefined, 2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
