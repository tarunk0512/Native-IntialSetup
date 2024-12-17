import React, { forwardRef, useImperativeHandle } from 'react';
import { Alert } from 'react-native';

export type LoginHandlerRef = {
  handleLogin: () => void;
};

const LoginHandler = forwardRef<LoginHandlerRef>((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleLogin: () => {
      Alert.alert(
        "Login Successful",
        "You have successfully logged in!",
        [{ text: "OK" }]
      );
    }
  }));

  return null; // This component doesn't render anything itself
});

export default LoginHandler;
