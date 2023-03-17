import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PageNotFound() {
  return (
    <Center h={"100dvh"}>
            <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, red.400, red.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color={"gray.500"} mb={6}>
          The page you're looking for does not seem to exist
        </Text>
        <Link to={"/"}>
          <Button bgColor={"#A6E3E9"}>Go Home</Button>
        </Link>
      </Box>
    </Center>
  );
}

export default PageNotFound;
