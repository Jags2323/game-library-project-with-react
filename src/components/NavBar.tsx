import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Homepage.jpg";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={0.8}>
      <Image src={logo} boxSize={35} />
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
