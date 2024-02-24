import React from "react";
import { Switch, HStack, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      {colorMode === "dark" && <Text> Dark Mode</Text>}
      {colorMode === "light" && <Text> Light Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
