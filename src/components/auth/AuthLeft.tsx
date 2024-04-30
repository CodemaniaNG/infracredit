import React from "react";
import { Box, Image, VStack, Heading } from "@chakra-ui/react";

const AuthLeft = () => {
  return (
    <Box
      flex="1"
      display={{ base: "none", md: "block" }}
      mr={8}
      bg="white"
      color="white"
      p={4}
    >
      <VStack
        bg="primary"
        justify="space-between"
        align="center"
        px={8}
        pt={10}
        spacing={8}
      >
        <Image
          src="/images/logo-white.svg"
          alt="Company Logo"
          objectFit="contain"
        />

        <Heading
          textAlign="center"
          fontSize={{
            base: "24px",
            md: "28px",
            lg: "32px",
          }}
          color="white"
          fontWeight={600}
          fontFamily="heading"
        >
          We provide you with the best platform to Create and Edit Reports of
          your choice.
        </Heading>

        <Image
          src="/images/auth.svg"
          alt="Company Logo"
          objectFit="contain"
          h={{ base: "200px", md: "250px" }}
          maxW={"850px"}
        />
      </VStack>
    </Box>
  );
};

export default AuthLeft;
