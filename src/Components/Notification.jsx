import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaBirthdayCake } from "react-icons/fa";

function Notification({ birthday }) {
  const toast = useToast();

  useEffect(() => {
    birthday.map((user) =>
      toast({
        position: "top-left",
        duration: 99999999,
        isClosable: true,
        title: `Happy Birthday, ${user.first_name}! 🎉`,
        description: " We hope all your wishes and dreams come true.",
        icon: <FaBirthdayCake size={"45px"} />,
      })
    );
  }, [birthday]);
}

export default Notification;
