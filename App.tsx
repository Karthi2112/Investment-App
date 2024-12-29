import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/pages/onBoarding/onboarding.tsx';
import Login from './src/pages/userAuth/login.tsx';
import OtpPage from './src/pages/userAuth/otp.tsx';
import SignInScreen from './src/pages/userAuth/signin.tsx';
import SchemeDetails from './src/pages/dashboard/schemedetails.tsx';
import MyDarkTheme from './src/theme/darkTheme.ts';
import MyDefaultTheme from './src/theme/defaultTheme.ts';
import { ThemeProvider, useTheme } from './src/components/theme.tsx'; // Import the ThemeProvider and custom hook
import Home from './src/pages/dashboard/homePage.tsx';
import axios from 'axios';

const Stack = createNativeStackNavigator();

// Custom App component wrapped with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme } = useTheme(); // Use custom hook to access theme from context

  return (
    <NavigationContainer

      theme={theme == 'dark' ? MyDarkTheme : MyDefaultTheme}

    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,

        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpPage"
          component={OtpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SchemeDetails"
          component={SchemeDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
