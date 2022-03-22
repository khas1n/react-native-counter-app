import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import CounterPage from "./components/CounterPage/CounterPage";
import { Provider } from "react-redux";
import { store } from "./store";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  type ICustomTheme = MyThemeType;
}

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <CounterPage />
      </NativeBaseProvider>
    </Provider>
  );
}
