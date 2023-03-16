import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Actions/actions";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Flex
      zIndex={"2"}
      top={"0"}
      position={"sticky"}
      bgColor={"#CBF1F5"}
      align={"center"}
      justify={"space-between"}
      py={6}
      px={8}>
      <Link to={"/"}>
        <Text fontSize={"18px"} fontWeight={"bold"}>
          Home
        </Text>
      </Link>
      <Flex gap={4} alignItems={"center"}>
        <Link to={"/add"}>
          <Button bgColor={"#A6E3E9"}>Add User</Button>
        </Link>
        <Menu>
          <MenuButton bgColor={"transparent"} as={Button}>
            <CgProfile size={"25px"} />
          </MenuButton>
          <MenuList w={"max-content"}>
            <MenuItem
              onClick={handleLogout}
              icon={<BiLogOutCircle size={"18px"} />}
              fontSize={"18px"}
              _focus={{ bgColor: "white", color: "red.600" }}
              transition={"200ms ease"}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar;
