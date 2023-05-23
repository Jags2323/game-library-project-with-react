import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
    // toggleColorMode: function colorMode: Property 
    const {toggleColorMode, colorMode} = useColorMode(); // this returns a objet with two properties
  return (
    <HStack>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default DarkModeSwitch;
