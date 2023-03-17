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
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("Please fill all of the fields");
      return;
    }

    if (!emailRef.current.value.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (passwordRef.current.value.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == emailRef.current.value) {
        setMessage("");
        setError("Email already exists");
        setLoading(false);
        return;
      }
    }

    users.push({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    localStorage.setItem("users", JSON.stringify(users));

    setTimeout(() => {
      setMessage("Account created succesfully!");
      setLoading(false);
    }, 3000);
  }

  return (
    <Center h={"100dvh"} px={"30px"} gap={12} flexDir={"column"} w={"100%"}>
            <Helmet>
        <title>Signup</title>
      </Helmet>
      <Heading color={"#333"}>Create an Account</Heading>
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
          {message === "" ? null : (
            <Alert borderRadius={"5px"} mb={4} status="success">
              <AlertIcon />
              {message}
            </Alert>
          )}
          <Flex mb={4} gap={2} flexDir={"column"}>
            <Text>Email</Text>
            <Input
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
          <Flex mb={4} gap={2} flexDir={"column"}>
            <Text>Password</Text>
            <Input
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
          <Flex mb={6} gap={2} flexDir={"column"}>
            <Text>Confirm Password</Text>
            <Input
              ref={confirmPasswordRef}
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
            isLoading={loading}
            onClick={handleSubmit}
            bgColor={"#A6E3E9"}
            w={"100%"}
            type="submit">
            Sign Up
          </Button>
        </FormControl>
        <Center mt={4}>
          <Text>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span style={{ fontWeight: "bold" }}>Sign In</span>
            </Link>
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default Signup;
