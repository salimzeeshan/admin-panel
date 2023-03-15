import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      bgColor={"#CBF1F5"}
      align={"center"}
      justify={"space-between"}
      py={6}
      px={8}>
      <Link to={"/"}>
        <Text fontWeight={"bold"}>Home</Text>
      </Link>
      <Link to={"/add"}>
        <Button bgColor={"#A6E3E9"}>Add User</Button>
      </Link>
    </Flex>
  );
}

export default Navbar;
