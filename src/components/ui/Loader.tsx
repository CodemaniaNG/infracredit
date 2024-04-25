import PropagateLoader from "react-spinners/PropagateLoader";
import { Box, Flex } from "@chakra-ui/react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#3F7ABA",
};

const Loader = () => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0,0,0,0.5)"
        zIndex="tooltip"
      >
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Box>
            <PropagateLoader
              color={"#3F7ABA"}
              loading={true}
              cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Loader;
