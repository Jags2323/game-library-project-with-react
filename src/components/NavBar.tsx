import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Homepage.jpg";

const NavBar = () => {
  return(
    <HStack >
      <Image src ={logo} boxSize={35} />
      <Text>NavBar</Text>
    </HStack>
  )

 
};

export default NavBar;
