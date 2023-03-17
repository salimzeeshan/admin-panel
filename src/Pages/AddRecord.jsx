import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/Actions/actions";
import store from "../Redux/store";
import { Helmet } from "react-helmet";

function AddRecord() {
  const [lastID, setLastID] = useState(0);
  const [error, setError] = useState("");
  const fNameRef = useRef();
  const lNameRef = useRef();
  const birthdayRef = useRef();
  const idRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getData() {
    const response = await store.getState().userReducer;
    setLastID(response[response.length - 1].id);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const bdate = birthdayRef.current.value;
    let currentDate = `${+day <= 9 ? `0${day}` : day}/${
      +month <= 9 ? `0${month}` : month
    }/${year}`;

    if (
      fNameRef.current.value === "" ||
      lNameRef.current.value === "" ||
      idRef.current.value === "" ||
      emailRef.current.value === "" ||
      birthdayRef.current.value === ""
    ) {
      setError("Please fill all of the fields");
      return;
    }

    if (birthdayRef.current.value.length !== 10) {
      setError("Please enter a valid DOB");
      return;
    }

    for (let i = 0; i < birthdayRef.current.value.length; i++) {
      if (i === 2 || i === 5) {
        if (birthdayRef.current.value[i] !== "/") {
          setError("Please enter a valid DOB");
          return;
        }
      }
    }

    if (
      +currentDate.slice(6, 10) < +bdate.slice(6, 10) ||
      +bdate.slice(3, 5) > 12
    ) {
      setError("Please enter a valid DOB");
      return;
    }

    if (
      +currentDate.slice(6, 10) == +bdate.slice(6, 10) &&
      +currentDate.slice(3, 5) < +bdate.slice(3, 5)
    ) {
      setError("Please enter a valid DOB");
      return;
    }

    if (
      +currentDate.slice(6, 10) == +bdate.slice(6, 10) &&
      +currentDate.slice(0, 2) < +bdate.slice(0, 2)
    ) {
      setError("Please enter a valid DOB");
      return;
    }

    if (
      !emailRef.current.value.includes("@") &&
      !emailRef.current.value.includes(".com")
    ) {
      setError("Please enter a valid email address");
      return;
    }

    const user = {
      first_name: fNameRef.current.value,
      last_name: lNameRef.current.value,
      id: idRef.current.value,
      email: emailRef.current.value,
      birthday: birthdayRef.current.value,
    };

    dispatch(addUser(user));
    navigate("/");
  };

  return (
    <Center
      gap={12}
      flexDir={"column"}
      margin={"auto"}
      mt={12}
      justifyContent={"center"}
      px={"30px"}
      maxW={"700px"}>
      <Helmet>
        <title>Add User</title>
      </Helmet>
      <Heading color={"#333"}>Add New User</Heading>
      <FormControl>
        {error === "" ? null : (
          <Alert borderRadius={"5px"} mb={4} status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Flex gap={3}>
          <Flex mb={6} w={"39%"} flexDirection={"column"}>
            <FormLabel>First Name</FormLabel>
            <Input ref={fNameRef} placeholder="Jon" type={"text"}></Input>
          </Flex>
          <Flex w={"39%"} flexDirection={"column"}>
            <FormLabel>Last Name</FormLabel>
            <Input ref={lNameRef} placeholder="Doe" type={"text"}></Input>
          </Flex>
          <Flex w={"22%"} flexDirection={"column"}>
            <FormLabel>DOB</FormLabel>
            <Input
              maxLength={"10"}
              ref={birthdayRef}
              placeholder="dd/mm/yyyy"
              type={"text"}></Input>
          </Flex>
        </Flex>
        <Flex gap={3}>
          <Flex w={"20%"} flexDirection={"column"}>
            <FormLabel>ID</FormLabel>
            <Input
              isReadOnly
              value={+lastID + 1}
              ref={idRef}
              placeholder="1"
              type={"number"}></Input>
          </Flex>
          <Flex w={"80%"} flexDirection={"column"}>
            <FormLabel>Email Address</FormLabel>
            <Input
              ref={emailRef}
              placeholder="jon.doe@domain.com"
              type={"email"}></Input>
          </Flex>
        </Flex>
        <Button
          onClick={(e) => handleForm(e)}
          bgColor={"#A6E3E9"}
          w={"100%"}
          mt={8}>
          ADD USER
        </Button>
      </FormControl>
    </Center>
  );
}

export default AddRecord;
