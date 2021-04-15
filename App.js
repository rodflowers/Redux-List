import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { HomeScreen } from "./src/screens/home.screen";
import { ListScreen } from "./src/screens/list.screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="List" component={ListScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
