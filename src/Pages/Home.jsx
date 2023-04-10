import {
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import store from "../Redux/store";
import UserTable from "../Components/Table";
import UserModal from "../Components/Modal";
import { useDispatch } from "react-redux";
import ConfirmDeleteModal from "../Components/ConfirmDelete";
import Notification from "../Components/Notification.jsx";
import { Helmet } from "react-helmet";
import { fetchUsers } from "../Redux/Actions/actions";

function Home() {
  const [data, setData] = useState([]);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setuserID] = useState("");
  const [deleteID, setDeleteID] = useState();
  const [dataState, setDataState] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteModal = useDisclosure();
  const dispatch = useDispatch();
  const [birthday, setBirthday] = useState([]);

  async function fetchData() {
    const response = await store.getState().userReducer;
    setData(response);

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${+day <= 9 ? `0${day}` : day}/${
      +month <= 9 ? `0${month}` : month
    }/${year}`;
    response.map((user) => {
      if (user.birthday === currentDate) {
        const birthdayList = [...birthday];
        birthdayList.push(user);
        setBirthday(birthdayList);
      }
    });
  }

  async function getInitialData() {
    await dispatch(fetchUsers());
    const response = await store.getState().userReducer;
    setData(response);
    setDataState(!dataState);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [dataState, data]);

  return (
    <Center
      pb={"60px"}
      px={"30px"}
      gap={12}
      flexDir={"column"}
      w={"100%"}
      mt={12}>
      <Notification birthday={birthday} />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Heading color={"#333"}>List of Users</Heading>
      <ConfirmDeleteModal
        setDataState={setDataState}
        dataState={dataState}
        deleteID={deleteID}
        deleteModal={deleteModal}
      />
      <UserModal
        isOpen={isOpen}
        onClose={onClose}
        fname={fname}
        lname={lname}
        email={email}
        userID={userID}
      />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Birthday</Th>
              <Th>View</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              ? data.map((user) => {
                  return (
                    <UserTable
                      setDeleteID={setDeleteID}
                      dataState={dataState}
                      setDataState={setDataState}
                      dispatch={dispatch}
                      setFName={setFName}
                      setLName={setLName}
                      setEmail={setEmail}
                      setuserID={setuserID}
                      onOpen={onOpen}
                      deleteModal={deleteModal}
                      key={user.id}
                      id={user.id}
                      first_name={user.first_name}
                      last_name={user.last_name}
                      email={user.email}
                      birthday={user.birthday}
                    />
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}

export default Home;
