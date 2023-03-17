import { Tr, Td, Button } from "@chakra-ui/react";
import { BsEyeFill, BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserTable(user) {
  const { setFName, setLName, setEmail, setuserID, deleteModal, setDeleteID } =
    user;
  const navigate = useNavigate();

  const handleView = () => {
    setFName(user.first_name);
    setLName(user.last_name);
    setEmail(user.email);
    setuserID(user.id);
    user.onOpen();
  };

  const handleEdit = () => {
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id,
      email: user.email,
      birthday: user.birthday,
    };
    localStorage.setItem("currentDetails", JSON.stringify(data));
    navigate("/update");
  };

  const handleDelete = () => {
    setDeleteID(user.id);
    deleteModal.onOpen();
  };

  return (
    <>
      <Tr key={user.id}>
        <Td isNumeric>{user.id}</Td>
        <Td>{user.first_name}</Td>
        <Td>{user.last_name}</Td>
        <Td>{user.email}</Td>
        <Td>{user.birthday}</Td>
        <Td>
          <Button bgColor={"#A6E3E9"} onClick={handleView}>
            <BsEyeFill />
          </Button>
        </Td>
        <Td>
          <Button onClick={handleEdit} bgColor={"#A6E3E9"}>
            <BsFillPencilFill />
          </Button>
        </Td>
        <Td>
          <Button
            bgColor={"red.400"}
            _hover={{ bgColor: "red.300" }}
            onClick={handleDelete}>
            <BsFillTrashFill color="white" />
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default UserTable;
