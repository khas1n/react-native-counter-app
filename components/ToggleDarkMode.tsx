import React from "react";
import { HStack, Switch, useColorMode, Text } from "native-base";

const ToggleDarkMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"}
      />
      <Text>Light</Text>
    </HStack>
  );
};

export default ToggleDarkMode;
