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

  async function getData() {
    const response = await store.getState().userReducer;
    setData(response);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, [dataState]);

  return (
    <Center pb={"60px"} px={"30px"} gap={12} flexDir={"column"} w={"100%"} mt={12}>
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
