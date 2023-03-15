import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

function UserModal(modal) {
  return (
    <Modal isCentered isOpen={modal.isOpen} onClose={modal.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modal.fname}'s details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <strong>User ID:</strong> {modal.userID}
          </Text>
          <Text>
            <strong>Full Name:</strong> {`${modal.fname} ${modal.lname}`}
          </Text>
          <Text>
            <strong>Email:</strong> {modal.email}
          </Text>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UserModal;
