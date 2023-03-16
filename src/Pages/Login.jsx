import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/Actions/actions";
import store from "../Redux/store";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("Please fill both of the fields");
      return;
    }

    if (!emailRef.current.value.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].email == emailRef.current.value &&
        users[i].password == passwordRef.current.value
      ) {
        setError("");
        dispatch(loginUser());
        console.log(store.getState().authReducer);
        navigate("/");
        return;
      }
    }

    setError("Incorrect email or password");
  }

  return (
    <Center h={"100dvh"} px={"30px"} gap={12} flexDir={"column"} w={"100%"}>
      <Heading color={"#333"}>Sign In as Admin</Heading>
      <Flex
        maxW={"500px"}
        w={"100%"}
        borderRadius={"20px"}
        pt={"40px"}
        pb={"80px"}
        px={"40px"}
        border={"1px solid gray"}
        borderColor={"gray.200"}
        flexDir={"column"}>
        <FormControl onSubmit={handleSubmit}>
          {error === "" ? null : (
            <Alert borderRadius={"5px"} mb={4} status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Flex mb={4} gap={2} flexDir={"column"}>
            <Text>Email</Text>
            <Input
              id="email"
              ref={emailRef}
              _focus={{
                WebkitBoxShadow: "none",
                boxShadow: "none",
                outlineColor: "#A6E3E9",
                border: "inherit",
              }}
              type={"email"}
            />
          </Flex>
          <Flex mb={6} gap={2} flexDir={"column"}>
            <Text>Password</Text>
            <Input
              id="password"
              ref={passwordRef}
              _focus={{
                WebkitBoxShadow: "none",
                boxShadow: "none",
                outlineColor: "#A6E3E9",
                border: "inherit",
              }}
              type={"password"}
            />
          </Flex>
          <Button
            onClick={handleSubmit}
            bgColor={"#A6E3E9"}
            w={"100%"}
            type="submit">
            Sign In
          </Button>
        </FormControl>
        <Center mt={4}>
          <Text>
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span style={{ fontWeight: "bold" }}>Sign Up</span>
            </Link>
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default Login;
